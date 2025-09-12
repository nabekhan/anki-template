import { consts } from '@anki-eco/shared';
import type { JSX } from 'preact';

const containerStyle: JSX.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  flexDirection: 'row',
  gap: '6px',
  zIndex: 9999,
  fontFamily: 'system-ui, -apple-system, sans-serif',
};

const baseButtonStyle: JSX.CSSProperties = {
  padding: '8px 16px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
  minWidth: '60px',
  background: 'white',
  color: 'black',
};

const backButtonStyle: JSX.CSSProperties = {
  ...baseButtonStyle,
  background: '#333',
  color: 'white',
};

function setCardBack(back: boolean) {
  const fn = (window as any)[consts.globalSetBack];
  if (typeof fn === 'function') fn(back);
}

export function Popup() {
  return (
    <div style={containerStyle}>
      <button style={baseButtonStyle} onClick={() => setCardBack(false)}>
        Front
      </button>
      <button style={backButtonStyle} onClick={() => setCardBack(true)}>
        Back
      </button>
    </div>
  );
}
