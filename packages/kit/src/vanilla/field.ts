import { consts } from '@anki-eco/shared';

export const cloneFieldNode = (name: string) => {
  const node = document.querySelector(`[${consts.fieldNameAttr}="${name}"]`);
  if (!node) {
    return null;
  }
  return node.cloneNode(true);
};
