import { LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { html } from 'lit/static-html.js';

@customElementOnce('ae-test')
export class TestExt extends LitElement {
  protected override render(): unknown {
    return html` <button><slot></slot></button> `;
  }

  private onClick() {
    // test
  }
}
