import { LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { html } from 'lit/static-html.js';
import { PencilLine } from 'lucide-static';

import '@/components/ext-item.js';
import '@/components/ext-container.js';
import '@/features/tldraw';
import { initTldraw } from '@/features/tldraw/index.js';

@customElementOnce('ext-tldraw')
export class TldrawExt extends LitElement {
  protected override render(): unknown {
    return html`
      <ext-item .icon=${PencilLine} @click=${this.onClick}> </ext-item>
    `;
  }

  closeCallbacks: (() => void)[] = [];

  private onClick() {
    initTldraw().then((close) => {
      if (close) {
        this.closeCallbacks.push(close);
      }
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.closeCallbacks.forEach((close) => close());
  }
}

export { initTldraw };
