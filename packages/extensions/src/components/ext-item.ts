import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

@customElementOnce('ext-item')
class ExtItem extends LitElement {
  // Optional raw SVG string. When provided, the component renders it directly
  // so internal styles can apply precisely to the SVG element.
  @property({ type: String })
  icon?: string;

  static override styles = css`
    :host {
      display: inline-block;
    }

    .btn {
      -webkit-tap-highlight-color: transparent;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      border-radius: 9999px;
      border: none; /* remove inner border to avoid nested borders with dock */
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: saturate(180%) blur(6px);
      color: #111827; /* gray-900 */
      box-shadow: none; /* show shadow only on hover */
      cursor: pointer;
      user-select: none;
      transition: transform 120ms ease, box-shadow 180ms ease,
        background-color 180ms ease, color 180ms ease;
      font: 500 12px/1.2 system-ui, -apple-system, Segoe UI, Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }

    .btn:hover {
      transform: translateY(-1px);
      box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.08),
        0 10px 20px rgba(0, 0, 0, 0.12);
    }

    .btn:active {
      transform: translateY(0);
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.06),
        0 6px 16px rgba(0, 0, 0, 0.08);
    }

    .btn:focus-visible {
      outline: 2px solid rgba(59, 130, 246, 0.7);
      outline-offset: 2px;
    }

    @media (prefers-color-scheme: dark) {
      .btn {
        background: rgba(24, 24, 27, 0.75);
        color: #e5e7eb; /* gray-200 */
      }
    }

    .icon {
      display: inline-flex;
      width: 16px;
      height: 16px;
      align-items: center;
      justify-content: center;
      color: inherit;
    }

    .icon ::slotted(svg),
    .icon svg {
      width: 16px;
      height: 16px;
      display: block;
      stroke: currentColor;
    }

    .label {
      display: none; /* hide text label for compact icon-only UI */
    }
  `;

  protected override render() {
    return html`
      <button class="btn" part="button" type="button">
        <span class="icon" part="icon">
          ${this.icon ? unsafeSVG(this.icon) : html`<slot name="icon"></slot>`}
        </span>
      </button>
    `;
  }
}
