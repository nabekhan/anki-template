import { css, unsafeCSS } from 'lit';
import twCss from './index.css?inline';

export const twStyle = css`
  ${unsafeCSS(twCss)}
`;

export const buttonStyle = css`
  :host {
    font-size: 12px;
    display: inline-block;
    padding: 3px 6px;
    border: none;
    border-radius: 0.2em;
    background: #e0e0e0;
    cursor: pointer;
    transition: background 0.2s;
  }

  :host(:hover) {
    background: #d0d0d0;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      background: #444;
    }
    :host(:hover) {
      background: #555;
    }
  }
`;
