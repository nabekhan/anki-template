import { parseDocument, DomUtils } from 'htmlparser2';
import { Element, Text } from 'domhandler';

/** @returns {import('vite').Plugin} */
export const injectFields = (props) => {
  return {
    name: '@anki-eco/injectFields',
    transformIndexHtml: (html) => {
      const dom = parseDocument(html);
      const body = DomUtils.getElementsByTagName('body', dom)[0];
      const fieldsContainer = new Element('div', {
        style: 'display: none',
        id: 'anki-eco-fields',
      });
      props.fields.forEach((name) => {
        DomUtils.appendChild(
          fieldsContainer,
          new Element(
            'div',
            {
              'data-anki-eco-field': name,
            },
            [new Text(`{{${name}}}`)]
          )
        );
      });
      DomUtils.prependChild(body, fieldsContainer);
      return DomUtils.getOuterHTML(dom);
    },
  };
};
