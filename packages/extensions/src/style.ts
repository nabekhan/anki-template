import { css, unsafeCSS } from 'lit';
import twCss from './index.css?inline';

console.log('twCss', twCss);

export const twStyle = css`
  ${unsafeCSS(twCss)}
`;
