import { css, html, LitElement } from 'lit';
import { customElementOnce } from '../utils.js';
import { property } from 'lit/decorators.js';

@customElementOnce('ext-container')
class ExtContainer extends LitElement {
  @property({
    type: String,
    reflect: true,
  })
  public position: 'left' | 'right' | 'center' | 'static' = 'right';

  static override styles = css`
    :host {
    }

    :host(:not([position='static'])) {
      position: fixed;
      bottom: 0;
    }

    :host([position='left']) {
      left: 0;
    }

    :host([position='right']) {
      right: 0;
    }

    :host([position='center']) {
      left: 50%;
      transform: translateX(-50%);
    }
  `;

  constructor() {
    super();
  }

  protected override render(): unknown {
    return html`<slot></slot>`;
  }
}
