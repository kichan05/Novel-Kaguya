import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {useLocation} from "react-router-dom";

const ResultPageStyle = styled.div`
  ${PageBasicStyle};
`

const ResultPage = () => {
  const location = useLocation()
  const {prompt, novel} = location.state
  const {title, tag, mainCharacterName, plot} = prompt

 return (
  <ResultPageStyle>
    <div className="content">
      {title}, {tag}, {mainCharacterName}, {plot}, {novel}
    </div>
  </ResultPageStyle>
 )
}

export default ResultPage