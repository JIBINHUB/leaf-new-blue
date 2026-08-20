/**
 * Studio dashboard — orders, enquiries, media library, and pricing.
 *
 * Every write here goes through Supabase with the signed-in user's token, and
 * every table's policy requires `is_owner()`. If a non-owner somehow rendered
 * this component, the database would still reject each action. The role check
 * below is UI courtesy, not the security boundary.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  X, Package, Inbox, Image as ImageIcon, Tag, Upload, Trash2,
  Loader2, RefreshCw, ShieldAlert, Users, ShoppingCart, MailCheck
} from 'lucide-react';
import { supabase, SITE_MEDIA_BUCKET } from './lib/supabase';
import { useAuth } from './lib/useAuth';
import './OwnerDashboard.css';

const ORDER_STATUSES = [
  'received', 'in_review', 'quoted', 'confirmed', 'in_progress', 'delivered', 'cancelled'
];

const PLACEMENTS = ['portfolio', 'hero', 'advantage', 'product', 'other'];

const formatInr = (value) =>
  typeof value === 'number' ? `₹${value.toLocaleString('en-IN')}` : '—';

const formatBytes = (bytes) => {
  if (!bytes) return '—';
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
};

const formatWhen = (value) =>
  new Date(value).toLocaleString('en-IN', {
    day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit'
  });

/* -------------------------------------------------------------------------- */

function OrdersTab() {
  const [orders, setOrders] = useState(null);
  const [savingId, setSavingId] = useState(null);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from('orders')
      .select('*, order_items(id, title, price_from)')
      .order('created_at', { ascending: false })
      .limit(100);
    setOrders(data || []);
  }, []);

  useEffect(() => { load(); }, [load]);

  const setStatus = async (order, status) => {
    setSavingId(order.id);
    await supabase.from('orders').update({ status }).eq('id', order.id);
    setOrders((current) => current.map((o) => (o.id === order.id ? { ...o, status } : o)));
    setSavingId(null);
  };

  const saveNote = async (order, owner_notes) => {
    await supabase.from('orders').update({ owner_notes }).eq('id', order.id);
  };

  if (orders === null) return <p className="od-empty">Loading orders…</p>;
  if (!orders.length) return <p className="od-empty">No orders yet.</p>;

  return (
    <div className="od-list">
      {orders.map((order) => (
        <article key={order.id} className="od-card">
          <header className="od-card-head">
            <div>
              <strong>#{order.reference}</strong>
              <span className="od-muted">{formatWhen(order.created_at)}</span>
            </div>
            <select
              value={order.status}
              onChange={(event) => setStatus(order, event.target.value)}
              disabled={savingId === order.id}
              aria-label={`Status for order ${order.reference}`}
            >
              {ORDER_STATUSES.map((status) => (
                <option key={status} value={status}>{status.replace('_', ' ')}</option>
              ))}
            </select>
          </header>

          <p className="od-contact">
            {order.contact_name} · <a href={`mailto:${order.contact_email}`}>{order.contact_email}</a>
            {order.contact_phone && <> · <a href={`tel:${order.contact_phone}`}>{order.contact_phone}</a></>}
          </p>

          {order.order_items?.length > 0 && (
            <ul className="od-items">
              {order.order_items.map((item) => (
                <li key={item.id}><span>{item.title}</span><span>{formatInr(item.price_from)}</span></li>
              ))}
            </ul>
          )}

          {order.project_brief && <p className="od-brief">{order.project_brief}</p>}

          <textarea
            className="od-note"
            placeholder="Note for the customer (they see this on their tracking page)"
            defaultValue={order.owner_notes || ''}
            onBlur={(event) => saveNote(order, event.target.value)}
          />
        </article>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function EnquiriesTab() {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100)
      .then(({ data }) => setRows(data || []));
  }, []);

  if (rows === null) return <p className="od-empty">Loading enquiries…</p>;
  if (!rows.length) return <p className="od-empty">No enquiries yet.</p>;

  return (
    <div className="od-list">
      {rows.map((row) => (
        <article key={row.id} className="od-card">
          <header className="od-card-head">
            <div>
              <strong>{row.name}</strong>
              <span className="od-muted">{formatWhen(row.created_at)}</span>
            </div>
            {row.email_sent === false && (
              <span className="od-flag" title={row.email_error || 'Email failed'}>
                <ShieldAlert size={13} aria-hidden="true" /> email failed
              </span>
            )}
          </header>
          <p className="od-contact">
            <a href={`mailto:${row.email}`}>{row.email}</a>
            {row.phone && <> · <a href={`tel:${row.phone}`}>{row.phone}</a></>}
            {row.company && <> · {row.company}</>}
          </p>
          {row.requested_service && <p className="od-muted">Service: {row.requested_service}</p>}
          {row.project_brief && <p className="od-brief">{row.project_brief}</p>}
        </article>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function MediaTab() {
  const { user } = useAuth();
  const [assets, setAssets] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [placement, setPlacement] = useState('portfolio');
  const fileInput = useRef(null);
  const replaceInput = useRef(null);
  const replacingRef = useRef(null);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from('media_assets')
      .select('*')
      .order('created_at', { ascending: false });
    setAssets(data || []);
  }, []);

  useEffect(() => { load(); }, [load]);

  const kindFor = (file) =>
    file.type.startsWith('video/') ? 'video' : file.type.startsWith('image/') ? 'image' : 'document';

  const upload = async (files) => {
    if (!files?.length) return;
    setBusy(true);
    setError('');

    for (const file of Array.from(files)) {
      // Timestamp prefix keeps names unique without stripping the original,
      // so files stay recognisable in the storage browser.
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
      const storagePath = `${placement}/${Date.now()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from(SITE_MEDIA_BUCKET)
        .upload(storagePath, file, { cacheControl: '31536000', upsert: false });

      if (uploadError) {
        setError(uploadError.message);
        continue;
      }

      const { data: urlData } = supabase.storage.from(SITE_MEDIA_BUCKET).getPublicUrl(storagePath);

      const { error: rowError } = await supabase.from('media_assets').insert({
        storage_path: storagePath,
        public_url: urlData.publicUrl,
        title: file.name,
        kind: kindFor(file),
        placement,
        mime_type: file.type,
        size_bytes: file.size,
        uploaded_by: user?.id || null
      });

      // Never leave an orphan file behind if the metadata row fails.
      if (rowError) {
        await supabase.storage.from(SITE_MEDIA_BUCKET).remove([storagePath]);
        setError(rowError.message);
      }
    }

    setBusy(false);
    if (fileInput.current) fileInput.current.value = '';
    load();
  };

  /* Replace keeps the same media_assets row — anything already pointing at this
     asset picks up the new file instead of breaking. */
  const replace = async (files) => {
    const asset = replacingRef.current;
    const file = files?.[0];
    replacingRef.current = null;
    if (replaceInput.current) replaceInput.current.value = '';
    if (!asset || !file) return;

    setBusy(true);
    setError('');

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const newPath = `${asset.placement || 'other'}/${Date.now()}-${safeName}`;

    const { error: uploadError } = await supabase.storage
      .from(SITE_MEDIA_BUCKET)
      .upload(newPath, file, { cacheControl: '31536000', upsert: false });

    if (uploadError) {
      setError(uploadError.message);
      setBusy(false);
      return;
    }

    const { data: urlData } = supabase.storage.from(SITE_MEDIA_BUCKET).getPublicUrl(newPath);
    const { error: rowError } = await supabase
      .from('media_assets')
      .update({
        storage_path: newPath,
        public_url: urlData.publicUrl,
        kind: kindFor(file),
        mime_type: file.type,
        size_bytes: file.size,
        title: file.name,
        updated_at: new Date().toISOString()
      })
      .eq('id', asset.id);

    if (rowError) {
      await supabase.storage.from(SITE_MEDIA_BUCKET).remove([newPath]);
      setError(rowError.message);
    } else {
      // Old file is only removed once the row points at the new one, so a
      // failure mid-way never leaves the site with a dead link.
      await supabase.storage.from(SITE_MEDIA_BUCKET).remove([asset.storage_path]);
    }

    setBusy(false);
    load();
  };

  const remove = async (asset) => {
    const confirmed = window.confirm(
      `Delete "${asset.title || asset.storage_path}" permanently?\n\n` +
      'This removes the file from storage. It cannot be undone, and anywhere on ' +
      'the site still using it will show a broken image.'
    );
    if (!confirmed) return;

    setBusy(true);
    await supabase.storage.from(SITE_MEDIA_BUCKET).remove([asset.storage_path]);
    await supabase.from('media_assets').delete().eq('id', asset.id);
    setBusy(false);
    load();
  };

  const toggleActive = async (asset) => {
    await supabase.from('media_assets').update({ is_active: !asset.is_active }).eq('id', asset.id);
    setAssets((current) =>
      current.map((a) => (a.id === asset.id ? { ...a, is_active: !a.is_active } : a))
    );
  };

  return (
    <div className="od-media">
      <div className="od-upload">
        <label className="od-upload-placement">
          Upload into
          <select value={placement} onChange={(event) => setPlacement(event.target.value)}>
            {PLACEMENTS.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
          </select>
        </label>

        <button type="button" className="od-primary" disabled={busy} onClick={() => fileInput.current?.click()}>
          {busy ? <Loader2 size={16} className="od-spin" aria-hidden="true" /> : <Upload size={16} aria-hidden="true" />}
          Upload files
        </button>

        <input
          ref={fileInput} type="file" multiple hidden
          accept="image/*,video/*,application/pdf"
          onChange={(event) => upload(event.target.files)}
        />
        <input
          ref={replaceInput} type="file" hidden
          accept="image/*,video/*,application/pdf"
          onChange={(event) => replace(event.target.files)}
        />

        <button type="button" className="od-ghost" onClick={load} aria-label="Refresh media list">
          <RefreshCw size={15} aria-hidden="true" />
        </button>
      </div>

      {error && <p className="od-error">{error}</p>}
      <p className="od-hint">Images, video, and PDFs up to 200 MB each.</p>

      {assets === null && <p className="od-empty">Loading media…</p>}
      {assets?.length === 0 && <p className="od-empty">Nothing uploaded yet.</p>}

      <div className="od-grid">
        {assets?.map((asset) => (
          <figure key={asset.id} className={`od-tile${asset.is_active ? '' : ' is-hidden'}`}>
            <div className="od-thumb">
              {asset.kind === 'image' ? (
                <img src={asset.public_url} alt={asset.alt_text || asset.title || ''} loading="lazy" />
              ) : asset.kind === 'video' ? (
                <video src={asset.public_url} muted playsInline preload="metadata" />
              ) : (
                <span className="od-doc">PDF</span>
              )}
            </div>

            <figcaption>
              <strong title={asset.title}>{asset.title || asset.storage_path}</strong>
              <span className="od-muted">{asset.placement} · {formatBytes(asset.size_bytes)}</span>
            </figcaption>

            <div className="od-tile-actions">
              <button type="button" onClick={() => toggleActive(asset)}>
                {asset.is_active ? 'Hide' : 'Show'}
              </button>
              <button
                type="button"
                onClick={() => { replacingRef.current = asset; replaceInput.current?.click(); }}
              >
                Replace
              </button>
              <button type="button" className="od-danger" onClick={() => remove(asset)}>
                <Trash2 size={13} aria-hidden="true" /> Delete
              </button>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function ProductsTab() {
  const [products, setProducts] = useState(null);
  const [saved, setSaved] = useState(null);

  const load = useCallback(async () => {
    const { data } = await supabase.from('products').select('*').order('sort_order');
    setProducts(data || []);
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async (product, patch) => {
    await supabase.from('products').update({ ...patch, updated_at: new Date().toISOString() }).eq('id', product.id);
    setProducts((current) => current.map((p) => (p.id === product.id ? { ...p, ...patch } : p)));
    setSaved(product.id);
    window.setTimeout(() => setSaved((id) => (id === product.id ? null : id)), 1600);
  };

  if (products === null) return <p className="od-empty">Loading services…</p>;

  return (
    <div className="od-list">
      <p className="od-hint">
        Prices here are what the Service Store shows. Leave the price blank for “on request”.
      </p>

      {products.map((product) => (
        <article key={product.id} className="od-card od-product">
          <div className="od-product-row">
            <input
              className="od-input od-input-title"
              defaultValue={product.title}
              onBlur={(event) => save(product, { title: event.target.value })}
              aria-label={`Title for ${product.id}`}
            />
            <label className="od-price">
              ₹
              <input
                className="od-input"
                type="number" min="0" step="500"
                defaultValue={product.price_from ?? ''}
                placeholder="on request"
                onBlur={(event) =>
                  save(product, { price_from: event.target.value === '' ? null : Number(event.target.value) })
                }
                aria-label={`Starting price for ${product.title}`}
              />
            </label>
          </div>

          <div className="od-product-row">
            <input
              className="od-input"
              defaultValue={product.delivery_time || ''}
              placeholder="Delivery time e.g. 2-3 weeks"
              onBlur={(event) => save(product, { delivery_time: event.target.value })}
              aria-label={`Delivery time for ${product.title}`}
            />
            <input
              className="od-input"
              defaultValue={product.badge || ''}
              placeholder="Badge e.g. Best value"
              onBlur={(event) => save(product, { badge: event.target.value || null })}
              aria-label={`Badge for ${product.title}`}
            />
          </div>

          <textarea
            className="od-input od-textarea"
            defaultValue={product.tagline || ''}
            placeholder="One-line description shown on the card"
            onBlur={(event) => save(product, { tagline: event.target.value })}
            aria-label={`Tagline for ${product.title}`}
          />

          <div className="od-product-foot">
            <label className="od-toggle">
              <input
                type="checkbox"
                checked={product.is_active}
                onChange={(event) => save(product, { is_active: event.target.checked })}
              />
              Visible in the store
            </label>
            {saved === product.id && <span className="od-saved">Saved</span>}
          </div>
        </article>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function CustomersTab() {
  const [rows, setRows] = useState(null);
  const [query, setQuery] = useState('');

  const load = useCallback(async () => {
    // RPC rather than a table read: the list joins auth.users, which the
    // browser cannot query directly. The function checks is_owner() itself.
    const { data } = await supabase.rpc('owner_customer_list');
    setRows(data || []);
  }, []);

  useEffect(() => { load(); }, [load]);

  if (rows === null) return <p className="od-empty">Loading customers…</p>;
  if (!rows.length) return <p className="od-empty">Nobody has created an account yet.</p>;

  const needle = query.trim().toLowerCase();
  const visible = needle
    ? rows.filter((row) =>
        [row.full_name, row.email, row.phone].some((field) =>
          (field || '').toLowerCase().includes(needle)
        ))
    : rows;

  const customerCount = rows.filter((row) => row.role !== 'owner').length;

  return (
    <div className="od-list">
      <div className="od-people-head">
        <p className="od-hint" style={{ margin: 0 }}>
          <strong>{rows.length}</strong> account{rows.length === 1 ? '' : 's'}
          {customerCount !== rows.length && <> · {customerCount} customer{customerCount === 1 ? '' : 's'}</>}
        </p>
        <input
          className="od-input"
          type="search"
          placeholder="Search name, email, or phone"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search accounts"
        />
      </div>

      {visible.length === 0 && <p className="od-empty">No account matches “{query}”.</p>}

      {visible.map((row) => (
        <article key={row.id} className="od-card od-person">
          <span className="od-person-avatar" aria-hidden="true">
            {(row.full_name || row.email || '?').trim().charAt(0).toUpperCase()}
          </span>

          <div className="od-person-body">
            <div className="od-person-top">
              <strong>{row.full_name || 'No name given'}</strong>
              {row.role === 'owner' && <span className="od-role-pill">owner</span>}
              {!row.email_confirmed && (
                <span className="od-flag" title="This address was never confirmed">
                  <MailCheck size={12} aria-hidden="true" /> unconfirmed
                </span>
              )}
            </div>

            <p className="od-contact">
              <a href={`mailto:${row.email}`}>{row.email}</a>
              {row.phone && <> · <a href={`tel:${row.phone}`}>{row.phone}</a></>}
            </p>

            <p className="od-muted od-person-stats">
              <span>Joined {formatWhen(row.created_at)}</span>
              <span>
                {row.last_sign_in_at ? `Last seen ${formatWhen(row.last_sign_in_at)}` : 'Never signed in'}
              </span>
              {row.order_count > 0 && (
                <span className="od-stat-strong">
                  <Package size={12} aria-hidden="true" /> {row.order_count} order{row.order_count === 1 ? '' : 's'}
                </span>
              )}
              {row.cart_item_count > 0 && (
                <span className="od-stat-strong">
                  <ShoppingCart size={12} aria-hidden="true" /> {row.cart_item_count} in cart
                </span>
              )}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

const TABS = [
  { key: 'orders', label: 'Orders', icon: Package, Component: OrdersTab },
  { key: 'enquiries', label: 'Enquiries', icon: Inbox, Component: EnquiriesTab },
  { key: 'customers', label: 'Customers', icon: Users, Component: CustomersTab },
  { key: 'media', label: 'Media', icon: ImageIcon, Component: MediaTab },
  { key: 'products', label: 'Pricing', icon: Tag, Component: ProductsTab }
];

export default function OwnerDashboard({ open, onClose }) {
  const { isOwner, loading } = useAuth();
  const [tab, setTab] = useState('orders');

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  if (loading) {
    return (
      <div className="od-shell"><div className="od-gate"><Loader2 className="od-spin" /></div></div>
    );
  }

  if (!isOwner) {
    return (
      <div className="od-shell">
        <div className="od-gate">
          <ShieldAlert size={28} aria-hidden="true" />
          <h2>Studio access only</h2>
          <p>This account is not an owner account.</p>
          <button type="button" className="od-primary" onClick={onClose}>Back to the site</button>
        </div>
      </div>
    );
  }

  const Active = TABS.find((entry) => entry.key === tab)?.Component || OrdersTab;

  return (
    <div className="od-shell">
      <header className="od-topbar">
        <h1>Studio dashboard</h1>
        <button type="button" className="od-close" onClick={onClose} aria-label="Close dashboard">
          <X size={18} />
        </button>
      </header>

      <nav className="od-tabs" aria-label="Dashboard sections">
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            className={key === tab ? 'is-active' : ''}
            onClick={() => setTab(key)}
            aria-current={key === tab ? 'page' : undefined}
          >
            <Icon size={15} aria-hidden="true" /> {label}
          </button>
        ))}
      </nav>

      <div className="od-body"><Active /></div>
    </div>
  );
}
