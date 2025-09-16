import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { twStyle } from '../style.js';

@customElementOnce('ext-item')
export class ExtItem extends LitElement {
  // Optional raw SVG string. When provided, the component renders it directly
  // so internal styles can apply precisely to the SVG element.
  @property({ type: String })
  icon?: string;

  static override styles = [
    twStyle,
    css`
      :host {
        display: inline-block;
      }
    `,
  ];

  protected override render() {
    return html`
      <button
        part="button"
        type="button"
        class="inline-flex items-center justify-center w-8 h-8 p-0 rounded-full bg-white/85 backdrop-blur text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500/70 focus-visible:outline-offset-2 dark:bg-zinc-900/75 dark:text-gray-200"
      >
        <span
          class="inline-flex items-center justify-center w-4 h-4"
          part="icon"
        >
          ${this.icon ? unsafeSVG(this.icon) : html`<slot name="icon"></slot>`}
        </span>
      </button>
    `;
  }
}
