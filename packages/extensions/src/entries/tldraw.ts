import { LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { html } from 'lit/static-html.js';
import { PencilLine } from 'lucide-static';

import '../components/ext-item.js';
import '../components/ext-container.js';

@customElementOnce('ext-tldraw')
class TldrawExt extends LitElement {
  protected override render(): unknown {
    return html` <ext-item .icon=${PencilLine}></ext-item> `;
  }
}
