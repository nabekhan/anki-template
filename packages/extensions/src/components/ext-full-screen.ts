import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { twStyle } from '../style.js';
import { X } from 'lucide-static';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

@customElementOnce('ext-full-screen')
export class FullScreen extends LitElement {
  private handleClose = () => {
    this.remove();
  };

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
    return html`
      <div class="w-full h-full bg-white dark:bg-gray-900 flex flex-col">
        <div
          part="toolbar"
          class="h-10 flex items-center justify-end gap-2 px-3 border-b border-black/5 bg-white/80 backdrop-blur sticky top-0 z-[1] dark:bg-gray-900/80 dark:border-white/10"
        >
          <button
            part="close-button"
            type="button"
            aria-label="Close"
            class="inline-flex items-center justify-center w-8 h-8 rounded-md text-gray-700 hover:bg-black/5 active:bg-black/10 dark:text-gray-200 dark:hover:bg-white/10"
            @click=${this.handleClose}
          >
            ${unsafeSVG(X)}
          </button>
        </div>

        <div class="flex-1 overflow-auto">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
