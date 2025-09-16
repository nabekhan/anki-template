import { css, html, LitElement, unsafeCSS } from 'lit';
import {
  customElementOnce,
  getAnkiClient,
  markAsUserInteractive,
} from '../utils.js';
import { property } from 'lit/decorators.js';
import { twStyle } from '../style.js';
import { CSS_VAR } from './bottom-bar-height.js';

@customElementOnce('ext-container')
export class ExtContainer extends LitElement {
  @property({
    type: String,
    reflect: true,
  })
  public position: 'left' | 'right' | 'static' = ['iPad', 'iPhone'].includes(
    getAnkiClient()
  )
    ? 'static'
    : 'left';

  static override styles = [
    twStyle,
    css`
      :host {
        display: block;
      }

      :host(:not([position='static'])) {
        position: fixed;
        top: calc(100dvh - var(${unsafeCSS(CSS_VAR)}, 0px) - 16px);
        transform: translateY(-100%);
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

  override connectedCallback(): void {
    super.connectedCallback();
    markAsUserInteractive(this);
  }
}
