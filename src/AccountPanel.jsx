/**
 * Sign in / create account, and — once signed in — the customer's own order
 * tracking. Rendered as a slide-over so it never takes the visitor away from
 * whatever page they were on.
 */

import { useCallback, useEffect, useState } from 'react';
import {
  X, Mail, Lock, User, Phone, LogOut, Package, Loader2, ShieldCheck,
  ArrowRight, Check, Eye, EyeOff
} from 'lucide-react';
import { supabase } from './lib/supabase';
import { useAuth } from './lib/useAuth';
import './AccountPanel.css';

const STATUS_STEPS = [
  { key: 'received', label: 'Received' },
  { key: 'in_review', label: 'In review' },
  { key: 'quoted', label: 'Quote sent' },
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'in_progress', label: 'In progress' },
  { key: 'delivered', label: 'Delivered' }
];

const statusIndex = (status) => STATUS_STEPS.findIndex((step) => step.key === status);

const formatInr = (value) =>
  typeof value === 'number' ? `₹${value.toLocaleString('en-IN')}` : 'On request';

const formatDate = (value) =>
  new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

function OrderCard({ order }) {
  const current = statusIndex(order.status);
  const cancelled = order.status === 'cancelled';

  return (
    <article className="account-order">
      <header className="account-order-head">
        <div>
          <span className="account-order-ref">#{order.reference}</span>
          <time className="account-order-date">{formatDate(order.created_at)}</time>
        </div>
        <span className={`account-order-status is-${order.status}`}>
          {cancelled ? 'Cancelled' : STATUS_STEPS[current]?.label || order.status}
        </span>
      </header>

      {order.order_items?.length > 0 && (
        <ul className="account-order-items">
          {order.order_items.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>{formatInr(item.price_from)}</span>
            </li>
          ))}
        </ul>
      )}

      {!cancelled && (
        <ol className="account-track" aria-label="Order progress">
          {STATUS_STEPS.map((step, index) => (
            <li
              key={step.key}
              className={index <= current ? 'is-done' : ''}
              aria-current={index === current ? 'step' : undefined}
            >
              <span className="account-track-dot" aria-hidden="true" />
              <span className="account-track-label">{step.label}</span>
            </li>
          ))}
        </ol>
      )}

      {order.appointment_at && (
        <p className="account-order-meta">
          Call booked for {new Date(order.appointment_at).toLocaleString('en-IN')}
        </p>
      )}
      {order.owner_notes && <p className="account-order-note">{order.owner_notes}</p>}
    </article>
  );
}

export default function AccountPanel({ open, onClose, onOpenDashboard }) {
  const { user, profile, isOwner, signIn, signUp, signOut, resetPassword } = useAuth();
  const [mode, setMode] = useState('signin');
  const [form, setForm] = useState({ email: '', password: '', fullName: '', phone: '' });
  const [status, setStatus] = useState({ busy: false, error: '', message: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [orders, setOrders] = useState(null);

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const loadOrders = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase
      .from('orders')
      .select('id, reference, created_at, status, appointment_at, owner_notes, order_items(id, title, price_from)')
      .order('created_at', { ascending: false });
    setOrders(data || []);
  }, [user]);

  useEffect(() => {
    if (open && user) loadOrders();
  }, [open, user, loadOrders]);

  // Escape closes, matching the rest of the site's overlays.
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ busy: true, error: '', message: '' });

    if (mode === 'reset') {
      const { error } = await resetPassword(form.email);
      setStatus({
        busy: false,
        error: error?.message || '',
        message: error ? '' : 'Check your inbox for the reset link.'
      });
      return;
    }

    const action = mode === 'signup' ? signUp : signIn;
    const { data, error } = await action({
      email: form.email.trim(),
      password: form.password,
      fullName: form.fullName,
      phone: form.phone
    });

    if (error) {
      setStatus({ busy: false, error: error.message, message: '' });
      return;
    }

    // Supabase returns a user with no session when email confirmation is on.
    if (mode === 'signup' && !data?.session) {
      setStatus({ busy: false, error: '', message: 'Account created. Confirm your email to finish.' });
      return;
    }

    setStatus({ busy: false, error: '', message: '' });
    setForm({ email: '', password: '', fullName: '', phone: '' });
  };

  if (!open) return null;

  return (
    <div className="account-overlay" role="dialog" aria-modal="true" aria-label="Your account">
      <button type="button" className="account-scrim" onClick={onClose} aria-label="Close account panel" />

      <div className="account-panel">
        <button type="button" className="account-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {!user ? (
          <div className="account-auth">
            {/* Brand panel. Gives the form somewhere to sit and makes the
                overlay feel like part of the site rather than a stock modal. */}
            <div className="account-hero" aria-hidden="true">
              <span className="account-hero-glow" />
              <span className="account-hero-mark">
                <img src="/assets/brand/leaf-creationism-logo-white.png" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </span>
              <p className="account-hero-kicker">Leaf Creationism</p>
              <h2 className="account-hero-title">
                {mode === 'reset' ? 'Reset your password' : 'Your studio account'}
              </h2>
            </div>

            {mode !== 'reset' && (
              <div className="account-segmented" role="tablist" aria-label="Account mode">
                <span className={`account-segmented-thumb${mode === 'signup' ? ' is-right' : ''}`} aria-hidden="true" />
                <button
                  type="button" role="tab" aria-selected={mode === 'signin'}
                  className={mode === 'signin' ? 'is-active' : ''}
                  onClick={() => { setMode('signin'); setStatus({ busy: false, error: '', message: '' }); }}
                >
                  Sign in
                </button>
                <button
                  type="button" role="tab" aria-selected={mode === 'signup'}
                  className={mode === 'signup' ? 'is-active' : ''}
                  onClick={() => { setMode('signup'); setStatus({ busy: false, error: '', message: '' }); }}
                >
                  Create account
                </button>
              </div>
            )}

            {mode === 'reset' && (
              <p className="account-sub">We will email you a link to set a new password.</p>
            )}

            <form onSubmit={submit} className="account-form">
              {mode === 'signup' && (
                <>
                  <label className="account-field">
                    <User size={16} aria-hidden="true" />
                    <input
                      type="text" required placeholder="Full name" autoComplete="name"
                      value={form.fullName} onChange={update('fullName')}
                    />
                  </label>
                  <label className="account-field">
                    <Phone size={16} aria-hidden="true" />
                    <input
                      type="tel" placeholder="Phone (optional)" autoComplete="tel"
                      value={form.phone} onChange={update('phone')}
                    />
                  </label>
                </>
              )}

              <label className="account-field">
                <Mail size={16} aria-hidden="true" />
                <input
                  type="email" required placeholder="Email address" autoComplete="email"
                  value={form.email} onChange={update('email')}
                />
              </label>

              {mode !== 'reset' && (
                <label className="account-field">
                  <Lock size={16} aria-hidden="true" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required minLength={6} placeholder="Password (min 6 characters)"
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                    value={form.password} onChange={update('password')}
                  />
                  <button
                    type="button"
                    className="account-peek"
                    onClick={() => setShowPassword((shown) => !shown)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </label>
              )}

              {status.error && <p className="account-error">{status.error}</p>}
              {status.message && <p className="account-message">{status.message}</p>}

              <button type="submit" className="account-submit" disabled={status.busy}>
                {status.busy
                  ? <Loader2 size={16} className="account-spin" aria-hidden="true" />
                  : <ArrowRight size={16} aria-hidden="true" />}
                {mode === 'signup' ? 'Create my account' : mode === 'reset' ? 'Send reset link' : 'Sign in'}
              </button>
            </form>

            {mode !== 'reset' && (
              <ul className="account-perks">
                <li><Check size={13} aria-hidden="true" /> Your cart saves across devices</li>
                <li><Check size={13} aria-hidden="true" /> Track every project stage by stage</li>
                <li><Check size={13} aria-hidden="true" /> Your brief and quotes in one place</li>
              </ul>
            )}

            <div className="account-switch">
              {mode === 'signin' && (
                <button type="button" onClick={() => setMode('reset')}>Forgot your password?</button>
              )}
              {mode === 'reset' && (
                <button type="button" onClick={() => setMode('signin')}>Back to sign in</button>
              )}
            </div>
          </div>
        ) : (
          <div className="account-home">
            <div className="account-identity">
              <span className="account-avatar" aria-hidden="true">
                {(profile?.full_name || user.email || '?').trim().charAt(0).toUpperCase()}
              </span>
              <div>
                <strong>{profile?.full_name || 'Your account'}</strong>
                <span>{user.email}</span>
              </div>
            </div>

            {isOwner && (
              <button type="button" className="account-dashboard-link" onClick={onOpenDashboard}>
                <ShieldCheck size={16} aria-hidden="true" />
                Open studio dashboard
              </button>
            )}

            <h3 className="account-heading">
              <Package size={16} aria-hidden="true" /> Your projects
            </h3>

            {orders === null && <p className="account-sub">Loading…</p>}
            {orders?.length === 0 && (
              <p className="account-sub">
                No projects yet. Add services to your cart and send your first enquiry.
              </p>
            )}
            {orders?.map((order) => <OrderCard key={order.id} order={order} />)}

            <button type="button" className="account-signout" onClick={signOut}>
              <LogOut size={16} aria-hidden="true" /> Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
