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

export function blobToBase64(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result?.toString() || '');
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
