import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { property } from 'lit/decorators.js';
import { twStyle } from '../style.js';

@customElementOnce('ext-container')
export class ExtContainer extends LitElement {
  @property({
    type: String,
    reflect: true,
  })
  public position: 'left' | 'right' | 'center' | 'static' = 'right';

  static override styles = [
    twStyle,
    css`
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
    `,
  ];

  constructor() {
    super();
  }

  protected override render(): unknown {
    return html`<div
      class="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/60 backdrop-blur border border-black/5 pointer-events-auto dark:bg-zinc-900/55 dark:border-white/10"
    >
      <slot></slot>
    </div>`;
  }
}
