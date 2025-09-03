import type { Plugin } from 'vite';
import { parseDocument, DomUtils } from 'htmlparser2';
import { Element, Text } from 'domhandler';
import type { Props } from '../index.ts';

export const injectFields = (props: Props) => {
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
  } as Plugin;
};
