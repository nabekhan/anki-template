import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { property } from 'lit/decorators.js';

@customElementOnce('ext-container')
class ExtContainer extends LitElement {
  @property({
    type: String,
    reflect: true,
  })
  public position: 'left' | 'right' | 'center' | 'static' = 'right';

  static override styles = css`
    :host {
      display: block;
    }

    :host(:not([position='static'])) {
      position: fixed;
      bottom: 16px;
      left: 0;
      right: 0;
      pointer-events: none;
    }

    .dock {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: saturate(180%) blur(8px);
      border: 1px solid rgba(0, 0, 0, 0.06);
      box-shadow: none; /* no default shadow on dock */
      pointer-events: auto;
    }

    @media (prefers-color-scheme: dark) {
      .dock {
        background: rgba(24, 24, 27, 0.55);
        border-color: rgba(255, 255, 255, 0.08);
      }
    }

    :host([position='left']) {
      left: 16px;
      right: auto;
    }

    :host([position='right']) {
      right: 16px;
      left: auto;
    }

    :host([position='center']) {
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    }
  `;

  constructor() {
    super();
  }

  protected override render(): unknown {
    return html`<div class="dock"><slot></slot></div>`;
  }
}
