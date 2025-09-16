import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { twStyle } from '../style.js';

@customElementOnce('ext-item')
export class ExtItem extends LitElement {
  @property({ type: String })
  icon?: string;

  static override styles = [
    twStyle,
    css`
      :host {
        display: block;
      }
    `,
  ];

  protected override render() {
    return html`
      <div
        part="button"
        role="button"
        class="flex items-center justify-center w-8 h-8 p-0 rounded-full bg-white/85 backdrop-blur text-gray-900 dark:bg-zinc-900/75 dark:text-gray-200 leading-none"
      >
        <span
          class="flex items-center justify-center w-4 h-4 leading-none"
          part="icon"
        >
          ${this.icon ? unsafeSVG(this.icon) : html`<slot name="icon"></slot>`}
        </span>
      </div>
    `;
  }
}
