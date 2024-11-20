import { BACK_INDICATOR_ID } from '@/utils/const';
import { atom, useAtom } from 'jotai';

const backAtom = atom(Boolean(document.getElementById(BACK_INDICATOR_ID)));

export const useBack = () => {
  const [back, setBack] = useAtom(backAtom);
  if (process.env.NODE_ENV === 'development') {
    (window as any).setBack = setBack;
  }
  return [back, setBack] as const;
};
