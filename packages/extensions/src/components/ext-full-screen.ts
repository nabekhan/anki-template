import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { twStyle } from '../style.js';

@customElementOnce('ext-full-screen')
class FullScreen extends LitElement {
  static override styles = [
    twStyle,
    css`
      :host {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
      }
    `,
  ];

  protected override render(): unknown {
    return html`<div class="w-full h-full bg-white dark:bg-gray-900">
      <slot></slot>
    </div>`;
  }
}
