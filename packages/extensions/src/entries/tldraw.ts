import { LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { html } from 'lit/static-html.js';

import '../components/ext-item.js';
import '../components/ext-container.js';

@customElementOnce('ext-tldraw')
class TldrawExt extends LitElement {
  protected override render(): unknown {
    return html`<ext-item></ext-item>`;
  }
}
