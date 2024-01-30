import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {useLocation, useNavigate} from "react-router-dom";
import {IconButton} from "../component/IconButton";
import {VscArrowLeft, VscCopy, VscDebugRestart} from "react-icons/vsc";

const ResultPageStyle = styled.div`
  ${PageBasicStyle};

  & .content {
    display: flex;
    flex-direction: row;
    gap: 20px;
    
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
  
  & .content > div {
    flex: 1;
    @media screen and (max-width: 500px) {
      flex: none;
    }
  }
  
  & .icon-button-wrap {
    margin-top: 8px;
    
    display: flex;
    justify-content: space-between;
  }
`

const Box = styled.div`
  width: 100%;
  padding: 16px 20px;

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
  const navigation = useNavigate()
  const {prompt, novel} = location.state
  const {title, tag, mainCharacterName, plot} = prompt

  const gotoPrev = () => {
    navigation(-1)
  }
  const copyClipboard = () => {
    navigator.clipboard.writeText(novel).then(() => alert("복사 완료"))
  }
  const reload = () => {

  }

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
          <div className="icon-button-wrap">
            <IconButton
              title={"돌아가기"}
              onClick={gotoPrev}><VscArrowLeft/></IconButton>
            <div>
              <IconButton
                title={"복사"}
                onClick={copyClipboard}><VscCopy/></IconButton>
              <IconButton
                title={"다시 만들기"}
                onClick={reload}><VscDebugRestart/></IconButton>
            </div>
          </div>
        </div>
      </div>
    </ResultPageStyle>
  )
}

export default ResultPage