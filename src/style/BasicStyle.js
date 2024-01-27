import {css} from "styled-components";

export const PageBasicStyle = css`
  padding: 12px 8px;
  margin-top: var(--header-height);

  & > .content {
    width: 100%;
    max-width: ${({theme}) => theme.size.mobileMaxWidth}px;

    margin: 0 auto;
  }
`