import { customElementOnce } from '@/utils.js';
import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export const CSS_VAR = '--bottom-bar-height';

@customElementOnce('bottom-bar-height')
export class BottomBarHeight extends LitElement {
  @property({ type: Number })
  iPad = 0;

  @property({ type: Number })
  iPhone = 0;

  protected override render() {
    return null;
  }

  protected override update(): void {
    let value = 0;
    const userAgent = navigator.userAgent;
    if (userAgent.includes('iPad')) {
      value = this.iPad;
    } else if (userAgent.includes('iPhone')) {
      value = this.iPhone;
    }
    document.documentElement.style.setProperty(CSS_VAR, `${value}px`);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.documentElement.style.removeProperty(CSS_VAR);
  }
}
