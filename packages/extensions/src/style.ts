import { css, unsafeCSS } from 'lit';
import twCss from './index.css?inline';

export const twStyle = css`
  ${unsafeCSS(twCss)}
`;
