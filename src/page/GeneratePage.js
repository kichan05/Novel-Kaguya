import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";

const GeneratePageStyle = styled.div`
  ${PageBasicStyle};
`

const GeneratePage = () => {
 return (
  <GeneratePageStyle>
    <div className="content">
      생성
    </div>
  </GeneratePageStyle>
 )
}

export default GeneratePage