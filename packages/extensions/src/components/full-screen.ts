import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { customElementOnce, markAsUserInteractive } from '../utils.js';
import { twStyle } from '../style.js';
import { X, BadgeQuestionMark } from 'lucide-static';
import '@/components/icon-button.js';

@customElementOnce('ae-full-screen')
export class FullScreen extends LitElement {
  @property({ type: String }) docs?: string;

  private handleClose = () => {
    this.remove();
  };

  static override styles = [
    twStyle,
    css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100dvh;
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
          ${this.docs
            ? html`<a
                part="docs-link"
                class="inline-flex"
                href=${this.docs}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open docs"
              >
                <ae-icon-button
                  part="docs-button"
                  aria-label="Open docs"
                  .icon=${BadgeQuestionMark}
                ></ae-icon-button>
              </a>`
            : null}
          <ae-icon-button
            part="close-button"
            aria-label="Close"
            @click=${this.handleClose}
            .icon=${X}
          ></ae-icon-button>
        </div>
        <div class="flex-1 overflow-hidden">
          <slot></slot>
        </div>
      </div>
    `;
  }

  private globalStyle?: HTMLStyleElement;

  override connectedCallback(): void {
    super.connectedCallback();
    markAsUserInteractive(this);

    document.documentElement.scrollTop = 0;
    this.globalStyle = document.createElement('style');
    this.globalStyle.textContent = `
      html {
        overflow: hidden !important;
      }

      html, body {
        margin: 0 !important;
        padding: 0 !important;
      }

      #qa {
        display: none !important;
      }
    `;
    document.head.appendChild(this.globalStyle);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.globalStyle?.remove();
  }
}
