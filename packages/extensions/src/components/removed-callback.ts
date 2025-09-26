import { customElementOnce } from '@/utils/index.js';
import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

@customElementOnce('ae-removed-callback')
export class RemoveCallback extends LitElement {
  @property()
  callback?: () => void;

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.callback?.();
  }
}
