import { parseDocument, DomUtils } from 'htmlparser2';
import { Element, Text } from 'domhandler';
import { consts } from '../const.js';

/** @returns {import('vite').Plugin} */
export const injectFields = (props) => {
  return {
    name: '@anki-eco/injectFields',
    transformIndexHtml: (html) => {
      const dom = parseDocument(html);
      const body = DomUtils.getElementsByTagName('body', dom)[0];
      const fieldsContainer = new Element('div', {
        style: 'display: none',
        id: consts.fieldContainerId,
      });
      props.fields.forEach((name) => {
        DomUtils.appendChild(
          fieldsContainer,
          new Element(
            'div',
            {
              [consts.fieldNameAttr]: name,
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
