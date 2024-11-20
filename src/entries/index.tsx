import { render } from 'preact';
import { ComponentType } from 'react';

import { APP_CONTAINER_ID } from '@/utils/const';

import '@/global.css';

import { Provider } from 'jotai';
import store from '@/store';

let container: HTMLElement | null = document.getElementById(APP_CONTAINER_ID);

export const setup = (App: ComponentType) => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    container!,
  );
  const id = setInterval(() => {
    if (container !== document.getElementById(APP_CONTAINER_ID)!) {
      render(null, container!);
      clearInterval(id);
      container = null;
    }
  }, 500);
};
