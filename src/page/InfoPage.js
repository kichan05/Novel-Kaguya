import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";

const InfoPageStyle = styled.div`
  ${PageBasicStyle};
`

const InfoPage = () => {
 return (
  <InfoPageStyle>
    <div className="content">
      이 프로젝트는...
    </div>
  </InfoPageStyle>
 )
}

export default InfoPage