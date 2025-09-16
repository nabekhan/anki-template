import { LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { html } from 'lit/static-html.js';
import { PencilLine } from 'lucide-static';

import '@/components/ext-item.js';
import '@/components/ext-full-screen.js';
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

  private onClick() {
    initTldraw();
  }
}
