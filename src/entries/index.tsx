import '@/global.css';
import store from '@/store';
import { APP_CONTAINER_ID } from '@/utils/const';
import { Provider } from 'jotai';
import { render } from 'preact';
import { ComponentType } from 'react';

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
