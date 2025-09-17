import { css, html, LitElement } from 'lit';
import { customElementOnce } from '@/utils.js';
import { twStyle } from '@/style.js';
import { property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

@customElementOnce('ae-icon-button')
export class IconButton extends LitElement {
  @property({ attribute: 'aria-label' }) label = '';

  @property({ type: String }) icon: string | undefined;

  static override styles = [
    twStyle,
    css`
      :host {
        display: inline-flex;
      }
    `,
  ];

  protected override render() {
    return html`
      <button
        part="button"
        type="button"
        aria-label=${this.label}
        class="inline-flex items-center justify-center w-8 h-8 rounded-md text-gray-700 hover:bg-black/5 active:bg-black/10 dark:text-gray-200 dark:hover:bg-white/10"
      >
        ${this.icon ? unsafeSVG(this.icon) : html`<slot></slot>`}
      </button>
    `;
  }
}
