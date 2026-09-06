/**
 * EnquiryTicket — the pass a client gets when a project request goes through.
 *
 * Design supplied by the project owner as a styled-components card. Converted
 * to a plain stylesheet, because styled-components is not a dependency here
 * and adding a runtime CSS-in-JS library to ship one component would be a poor
 * trade. Two things also changed on purpose:
 *
 *   1. transform-style: preserve-3d is gone. The hover tilt is a single rotate
 *      on one element, which needs no 3D context — and preserve-3d is exactly
 *      what mobile Safari and Chrome fail to paint on this site.
 *   2. the download draws the ticket onto a canvas rather than screenshotting
 *      the DOM, so it needs no html2canvas and produces the same PNG on every
 *      browser.
 *
 * The id is the one the enquiry API generates, so the ticket a client keeps
 * matches the reference in both emails and in the studio's inbox.
 */

import { useCallback, useRef } from 'react';
import { Download } from 'lucide-react';

import './EnquiryTicket.css';

const BAR_PATTERN = [2, 1, 3, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 1, 4, 3, 2, 1, 3, 1];

const drawTicket = (canvas, ticket) => {
  const scale = 2;
  const W = 640;
  const H = 940;
  canvas.width = W * scale;
  canvas.height = H * scale;
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);

  const round = (x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  };

  ctx.fillStyle = '#0b0e17';
  round(0, 0, W, H, 26);
  ctx.fill();

  // Faint grid, the same one the card carries on screen.
  ctx.strokeStyle = 'rgba(32, 80, 227, 0.16)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H - 300); ctx.stroke();
  }
  for (let y = 0; y <= H - 300; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  const sans = '"Outfit", "Segoe UI", system-ui, sans-serif';

  ctx.fillStyle = '#f8fafc';
  ctx.font = `800 26px ${sans}`;
  ctx.fillText('LEAF CREATIONISM', 48, 82);

  ctx.strokeStyle = '#4d7dff';
  ctx.lineWidth = 1.5;
  round(W - 210, 56, 162, 34, 17);
  ctx.stroke();
  ctx.fillStyle = '#4d7dff';
  ctx.font = `700 13px ${sans}`;
  ctx.fillText('PROJECT TICKET', W - 190, 78);

  ctx.fillStyle = '#ffffff';
  ctx.font = `800 62px ${sans}`;
  ctx.fillText('Project', 48, 208);
  ctx.fillText('Request', 48, 272);

  ctx.fillStyle = '#94a3b8';
  ctx.font = `400 20px ${sans}`;
  ctx.fillText('Kerala, India / leafcreationism.in', 48, 312);

  const rows = [
    ['Name', ticket.name],
    ['Raised', ticket.date],
    ['Services', ticket.services],
    ['References', ticket.references]
  ];

  rows.forEach(([label, value], i) => {
    const x = 48 + (i % 2) * 290;
    const y = 400 + Math.floor(i / 2) * 108;
    ctx.fillStyle = '#94a3b8';
    ctx.font = `600 13px ${sans}`;
    ctx.fillText(label.toUpperCase(), x, y);
    ctx.fillStyle = '#f8fafc';
    ctx.font = `700 24px ${sans}`;
    const text = String(value);
    ctx.fillText(text.length > 22 ? `${text.slice(0, 21)}…` : text, x, y + 34);
  });

  // Perforation.
  ctx.strokeStyle = 'rgba(255,255,255,0.22)';
  ctx.lineWidth = 2;
  ctx.setLineDash([9, 9]);
  ctx.beginPath();
  ctx.moveTo(46, H - 300);
  ctx.lineTo(W - 46, H - 300);
  ctx.stroke();
  ctx.setLineDash([]);

  // Stub.
  ctx.fillStyle = '#131a2b';
  round(0, H - 300, W, 300, 26);
  ctx.fill();
  ctx.fillStyle = '#131a2b';
  ctx.fillRect(0, H - 300, W, 40);

  let bx = 48;
  ctx.fillStyle = '#ffffff';
  BAR_PATTERN.forEach((w, i) => {
    if (i % 2 === 0) ctx.fillRect(bx, H - 240, w * 3, 74);
    bx += w * 3 + 6;
  });

  ctx.fillStyle = '#94a3b8';
  ctx.font = `600 17px ui-monospace, monospace`;
  ctx.fillText(ticket.id, 48, H - 138);

  ctx.fillStyle = '#94a3b8';
  ctx.font = `600 13px ${sans}`;
  ctx.fillText('REPLY WITHIN', 48, H - 92);
  ctx.fillStyle = '#4d7dff';
  ctx.font = `800 46px ${sans}`;
  ctx.fillText('24 hours', 48, H - 46);
};

export default function EnquiryTicket({ ticket }) {
  const canvasRef = useRef(null);

  const download = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawTicket(canvas, ticket);
    const link = document.createElement('a');
    link.download = `leaf-creationism-ticket-${ticket.id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, [ticket]);

  return (
    <div className="lt-wrap" role="status" aria-label={`Project ticket ${ticket.id}`}>
      <div className="lt-ticket">
        <div className="lt-main">
          <div className="lt-content">
            <div className="lt-header">
              <span className="lt-logo">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                LEAF CREATIONISM
              </span>
              <span className="lt-type">Project ticket</span>
            </div>

            <p className="lt-title">Project<br />Request</p>
            <p className="lt-subtitle">Kerala, India / leafcreationism.in</p>

            <div className="lt-details">
              <span className="lt-item"><em>Name</em><b>{ticket.name}</b></span>
              <span className="lt-item"><em>Raised</em><b>{ticket.date}</b></span>
              <span className="lt-item"><em>Services</em><b>{ticket.services}</b></span>
              <span className="lt-item"><em>References</em><b>{ticket.references}</b></span>
            </div>
          </div>

          <span className="lt-perforation" aria-hidden="true"><i /></span>
        </div>

        <div className="lt-stub">
          <span className="lt-barcode-box">
            <span className="lt-barcode" aria-hidden="true" />
            <span className="lt-id">{ticket.id}</span>
          </span>
          <span className="lt-admit">
            <em>Reply within</em>
            <b>24h</b>
          </span>
        </div>
      </div>

      <button type="button" className="lt-download" onClick={download}>
        <Download size={16} /> Download your ticket
      </button>

      {/* Drawn only when the download is pressed. */}
      <canvas ref={canvasRef} className="lt-canvas" aria-hidden="true" />
    </div>
  );
}
