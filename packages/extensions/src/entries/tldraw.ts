import { css, LitElement } from 'lit';
import { customElementOnce, markAsUserInteractive } from '../utils.js';
import { html } from 'lit/static-html.js';

import { initTldraw } from '@/features/tldraw/index.js';
import { property } from 'lit/decorators.js';
import { buttonStyle } from '@/style.js';

@customElementOnce('ae-tldraw')
export class TldrawExt extends LitElement {
  static override styles = [buttonStyle];

  @property({ type: String })
  selector = 'body';

  protected override render(): unknown {
    return html`<slot>Tldraw</slot>`;
  }

  override connectedCallback(): void {
    super.connectedCallback();

    markAsUserInteractive(this);
    this.addEventListener('click', this.onClick);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.onClick);
    this.closeCallback?.();
  }

  closeCallback?: () => void;

  private onClick = () => {
    this.closeCallback?.();
    initTldraw(this.selector).then((close) => {
      if (close) {
        this.closeCallback = close;
      }
    });
  };
}

export { initTldraw };
