import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";

const InfoPageStyle = styled.div`
  ${PageBasicStyle};
`

const InfoPage = () => {
 return (
  <InfoPageStyle>
    <div className="content">
      생성
    </div>
  </InfoPageStyle>
 )
}

export default InfoPage