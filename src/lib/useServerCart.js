/**
 * Keeps the in-page cart (`completedSteps`, a list of product ids) mirrored to
 * the signed-in user's cart row so it follows them to another device.
 *
 * Merge rule on sign-in: union of local and server. A visitor who added items
 * before logging in must not lose them, and a cart saved on their phone must
 * not disappear when they open the site on a laptop.
 */

import { useCallback, useEffect, useRef } from 'react';
import { supabase } from './supabase';

async function getOrCreateOpenCart(userId) {
  const { data: existing } = await supabase
    .from('carts')
    .select('id')
    .eq('user_id', userId)
    .eq('status', 'open')
    .maybeSingle();

  if (existing) return existing.id;

  const { data: created, error } = await supabase
    .from('carts')
    .insert({ user_id: userId })
    .select('id')
    .single();

  if (error) return null;
  return created.id;
}

export function useServerCart({ user, selectedIds, setSelectedIds, catalog }) {
  const cartIdRef = useRef(null);
  const mergedRef = useRef(false);
  // Skip the very first push: it would fire before the merge and could wipe
  // a saved cart with an empty local one.
  const readyRef = useRef(false);

  // Pull the saved cart once per sign-in and merge it into local state.
  useEffect(() => {
    if (!user) {
      cartIdRef.current = null;
      mergedRef.current = false;
      readyRef.current = false;
      return;
    }
    if (mergedRef.current) return;

    let active = true;
    (async () => {
      const cartId = await getOrCreateOpenCart(user.id);
      if (!active || !cartId) return;
      cartIdRef.current = cartId;

      const { data: items } = await supabase
        .from('cart_items')
        .select('product_id')
        .eq('cart_id', cartId);

      if (!active) return;

      const serverIds = (items || []).map((item) => item.product_id).filter(Boolean);
      setSelectedIds((current) => Array.from(new Set([...current, ...serverIds])));

      mergedRef.current = true;
      readyRef.current = true;
    })();

    return () => {
      active = false;
    };
  }, [user, setSelectedIds]);

  // Push local changes back up. Debounced so rapid add/remove taps make one write.
  useEffect(() => {
    if (!user || !readyRef.current || !cartIdRef.current) return;

    const cartId = cartIdRef.current;
    const timer = window.setTimeout(async () => {
      await supabase.from('cart_items').delete().eq('cart_id', cartId);

      if (selectedIds.length) {
        const rows = selectedIds.map((id) => {
          const product = catalog?.find((entry) => entry.id === id);
          return {
            cart_id: cartId,
            product_id: id,
            title: product?.title || id,
            price_from: product?.price_from ?? null
          };
        });
        await supabase.from('cart_items').insert(rows);
      }

      await supabase.from('carts').update({ updated_at: new Date().toISOString() }).eq('id', cartId);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [user, selectedIds, catalog]);

  const clearServerCart = useCallback(async () => {
    if (!cartIdRef.current) return;
    await supabase.from('carts').update({ status: 'ordered' }).eq('id', cartIdRef.current);
    cartIdRef.current = null;
    mergedRef.current = false;
    readyRef.current = false;
  }, []);

  return { clearServerCart };
}
