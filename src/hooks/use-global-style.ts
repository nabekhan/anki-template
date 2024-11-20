import useCreation from 'ahooks/es/useCreation';
import { useEffect } from 'react';

import { APP_CONTAINER_ID } from '@/utils/const';

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
