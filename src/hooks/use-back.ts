import { BACK_INDICATOR_ID } from '@/utils/const';
import { atom, useAtom } from 'jotai';

declare global {
  interface Window {
    setBack?: (back: boolean) => void;
  }
}

const backAtom = atom(Boolean(document.getElementById(BACK_INDICATOR_ID)));

export const useBack = () => {
  const [back, setBack] = useAtom(backAtom);
  if (process.env.NODE_ENV === 'development') {
    window.setBack = setBack;
  }
  return [back, setBack] as const;
};
