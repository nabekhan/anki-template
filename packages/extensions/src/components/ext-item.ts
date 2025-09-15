import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';

@customElementOnce('ext-item')
class ExtItem extends LitElement {
  static override styles = css``;

  protected override render() {
    return html`
      <div class="ext-item">
        <slot></slot>
      </div>
    `;
  }
}
