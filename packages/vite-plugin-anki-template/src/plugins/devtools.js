import { parseDocument, DomUtils } from 'htmlparser2';
import { Element, Text } from 'domhandler';

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
  if (window._ankiEcoSetCardBack) {
    _ankiEcoSetCardBack(back);
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
    transformIndexHtml: async (html) => {
      const dom = parseDocument(html);
      const body = DomUtils.getElementsByTagName('body', dom)[0];
      DomUtils.prependChild(
        body,
        new Element('script', {}, [new Text(runtime)])
      );
      return DomUtils.getOuterHTML(dom, { decodeEntities: false });
    },
  };
};
