/**
 * Authentication + profile state for the whole app.
 *
 * `isOwner` is read from the profiles table, never from anything the browser
 * can set. Hiding the dashboard in the UI is only a convenience — the real
 * protection is the row level security policies in Postgres, which reject an
 * unauthorised write even if someone renders the dashboard by hand.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from './supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async (userId) => {
    if (!userId) {
      setProfile(null);
      return;
    }
    const { data } = await supabase
      .from('profiles')
      .select('id, email, full_name, phone, role')
      .eq('id', userId)
      .maybeSingle();
    setProfile(data || null);
  }, []);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      loadProfile(data.session?.user?.id).finally(() => active && setLoading(false));
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      loadProfile(nextSession?.user?.id);
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, [loadProfile]);

  const value = useMemo(
    () => ({
      session,
      user: session?.user || null,
      profile,
      isOwner: profile?.role === 'owner',
      loading,

      signUp: async ({ email, password, fullName, phone }) => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName || '' },
            emailRedirectTo: `${window.location.origin}/account`
          }
        });
        if (!error && data.user && phone) {
          await supabase.from('profiles').update({ phone }).eq('id', data.user.id);
        }
        return { data, error };
      },

      signIn: ({ email, password }) => supabase.auth.signInWithPassword({ email, password }),

      signInWithGoogle: () =>
        supabase.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: `${window.location.origin}/account` }
        }),

      resetPassword: (email) =>
        supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/account`
        }),

      signOut: () => supabase.auth.signOut(),

      refreshProfile: () => loadProfile(session?.user?.id)
    }),
    [session, profile, loading, loadProfile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside <AuthProvider>');
  return context;
}
