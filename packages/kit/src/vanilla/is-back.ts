import { consts } from '@anki-eco/shared';
import { atom } from 'jotai';

const isBack = () => Boolean(document.getElementById(consts.backIndicatorId));

export const isBackAtom = atom(isBack());

isBackAtom.onMount = (set) => {
  window[consts.globalSetBack] = set;
  return () => (window[consts.globalSetBack] = undefined);
};
