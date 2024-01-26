import {css} from "styled-components";

export const PageBasicStyle = css`
  margin-top: var(--header-height);

  & > .content {
    width: 100%;
    max-width: ${({theme}) => theme.size.mobileMaxWidth}px;

    margin: 0 auto;
  }
`