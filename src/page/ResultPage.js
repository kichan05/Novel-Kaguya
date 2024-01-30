import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {useLocation} from "react-router-dom";
import {IconButton} from "../component/IconButton";

const ResultPageStyle = styled.div`
  ${PageBasicStyle};

  & .content {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  
  & .content > div {
    flex: 1;
  }
`

const Box = styled.div`
  width: 100%;
  padding: 20px;

  border-radius: 6px;
  background: ${p => p.theme.color.Gray2};

  & .title {
    font-size: 17px;
    font-weight: 600;
  }

  & p {
    margin-top: 4px;
  }
`

const ResultPage = () => {
  const location = useLocation()
  const {prompt, novel} = location.state
  const {title, tag, mainCharacterName, plot} = prompt

  return (
    <ResultPageStyle>
      <div className="content">
        <div>
          <Box>
            <div className="title">소설 프롬프트</div>
            <p>
              제목 : {title}<br/>
              장르 : {tag}<br/>
              주인공 : {mainCharacterName}<br/>
              줄거리 : {plot}<br/>
            </p>
          </Box>
        </div>
        <div>
          <Box>
            <div className="title">완성된 소설</div>
            <p>{novel}</p>
          </Box>
        </div>
      </div>
    </ResultPageStyle>
  )
}

export default ResultPage