import {css} from "styled-components";

export const PageBasicStyle = css`
  margin-top: var(--header-height);

  & > .content {
    width: 100%;
    max-width: var(--max-page-content);
    
    padding: 12px 8px;
    margin: 0 auto;
  }
`