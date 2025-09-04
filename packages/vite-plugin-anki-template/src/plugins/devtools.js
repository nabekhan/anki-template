import { consts } from '../const.js';

const runtime = `
const actionsContainer = document.createElement('div');
actionsContainer.style = 'position:fixed; top:50vh;right:0;display:flex;flex-direction:column;';
const front = document.createElement('button');
front.textContent = 'Front';
const back = document.createElement('button');
back.textContent = 'Back';

actionsContainer.appendChild(front);
actionsContainer.appendChild(back);

const setCardBack = (back) => {
  if (window.${consts.globalSetBack}) {
    ${consts.globalSetBack}(back);
  }
}

front.onclick = ()=> setCardBack(false);
back.onclick = ()=> setCardBack(true);

document.body.appendChild(actionsContainer);
`;

/** @returns {import('vite').Plugin} */
export const devtools = (props) => {
  return {
    name: '@anki-eco/devtools',
    apply: 'serve',
    transformIndexHtml: () => [
      { tag: 'script', injectTo: 'body', children: runtime },
    ],
  };
};
