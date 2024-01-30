import {css} from "styled-components";

export const PageBasicStyle = css`
  margin-top: var(--header-height);

  & > .content {
    width: 100%;
    max-width: var(--max-page-content);
    min-height: calc(100 * var(--vh) - var(--header-height));
    
    padding: 12px 8px;
    margin: 0 auto;
  }
`