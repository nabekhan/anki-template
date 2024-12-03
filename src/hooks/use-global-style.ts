import { APP_CONTAINER_ID } from '@/utils/const';
import useCreation from 'ahooks/es/useCreation';
import { useEffect } from 'react';

export const useGlobalStyle = (style: string) => {
  const node = useCreation(() => {
    const el = document.createElement('style');
    document
      .getElementById(APP_CONTAINER_ID)
      ?.insertAdjacentElement('beforebegin', el);
    return el;
  }, []);
  useEffect(() => {
    node.innerHTML = style;
  }, [style]);
};
