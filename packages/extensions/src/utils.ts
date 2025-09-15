import { customElement } from 'lit/decorators.js';

export const customElementOnce: typeof customElement =
  (tagName) => (classOrTarget, context?: ClassDecoratorContext) => {
    const define = () => {
      if (!customElements.get(tagName)) {
        customElements.define(
          tagName,
          classOrTarget as CustomElementConstructor
        );
      }
    };
    if (context) {
      context.addInitializer(define);
    } else {
      define();
    }
  };
