import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";

const MainPageStyle = styled.div`
  ${PageBasicStyle};
  
  & > .content {
    height: calc(var(--vh) * 100 - var(--header-height));
  }
`

const MainPage = () => {
 return (
  <MainPageStyle>
    <div className="content">
      메인 페이지
    </div>
  </MainPageStyle>
 )
}

export default MainPage