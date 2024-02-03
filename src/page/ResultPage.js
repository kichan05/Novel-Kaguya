import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import {useLocation, useNavigate} from "react-router-dom";
import {IconButton} from "../component/IconButton";
import {VscArrowLeft, VscCopy, VscDebugRestart, VscTriangleDown, VscTriangleRight} from "react-icons/vsc";
import {useRef, useState} from "react";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from "react-tooltip";

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

  & .content > * {
    flex: 1;
    @media screen and (max-width: 500px) {
      flex: none;
    }
  }

  & .novel-item {
    margin-bottom: 6px;
  }

  & .icon-button-wrap {
    margin-top: 8px;

    display: flex;
    justify-content: right;
  }
`

const Box = styled.div`
  width: 100%;
  padding: 16px 20px;

  border-radius: 6px;
  background: ${p => p.theme.color.Gray2};
  
  transition: 200ms;

  & .header {
    display: flex;
    justify-content: space-between;
  }
  
  & .title {
    font-size: 17px;
    font-weight: 600;
    
    display: flex;
    align-items: center;
    gap: 4px;
    
    user-select: none;
  }
  
  & .copy-icon {
    opacity: 0;

    transition: 200ms;
    cursor: pointer;
  }

  & p {
    margin-top: 4px;
  }

  &:hover .copy-icon {
    opacity: 1;
  }
`

const ToggleArrow = styled.span`
  display: inline-flex;
  
  cursor: pointer;
  transition: 200ms;
  transform: rotateZ(${p => p.isOpen ? 0 : -90}deg);
`

const ResultPage = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const uiDispatch = useUiDispatch()

  const {prompt, novel} = location.state
  const {title, tag, mainCharacterName, plot} = prompt

  const novelId = useRef(1)
  const [novelList, setNovelList] = useState([
    {id: 0, novel, isOpen : true}
  ])

  const gotoPrev = () => {
    navigation(-1)
  }

  const copyClipboard = (txt) => {
    navigator.clipboard.writeText(txt).then(() => alert("복사 완료"))
  }
  const retry = async () => {
    uiDispatch({type: UI_ACTION_TYPE.modal_show, data: prompt})

    setTimeout(() => {
      setNovelList([...novelList, {
        id: novelId.current, novel, isOpen : true
      }])
      novelId.current += 1

      uiDispatch({type: UI_ACTION_TYPE.modal_hide})
    }, 1500)
  }

  const novelToggle = (id) => {
    setNovelList(novelList.map(n => (
      n.id === id ? {...n, isOpen: !n.isOpen} : n
    )))
  }

  return (
    <ResultPageStyle>
      <Tooltip id={"btn-result-prev"}/>
      <Tooltip id={"btn-result-copy"}/>
      <Tooltip id={"btn-result-retry"}/>

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
          <div className="icon-button-wrap">
            <IconButton
              onClick={gotoPrev}
              data-tooltip-id="btn-result-prev"
              data-tooltip-content="돌아가기"
            ><VscArrowLeft/></IconButton>
            <IconButton
              onClick={retry}
              data-tooltip-id="btn-result-retry"
              data-tooltip-content="다시 생성"
            ><VscDebugRestart/></IconButton>
          </div>
        </div>

        <div>
          {novelList.map((novel) => (
            <Box key={novel.id} className={"novel-item"}>
              <div
                className="header">
                <div className={"title"} onClick={() => novelToggle(novel.id)}>
                  <ToggleArrow isOpen={novel.isOpen}>
                    <VscTriangleDown/>
                  </ToggleArrow>
                  <span>{novel.id + 1}번째 소설</span>
                </div>
                <div
                  className="copy-icon"
                  onClick={() => copyClipboard(novel.novel)}
                  data-tooltip-id={"btn-result-copy"}
                  data-tooltip-content={"복사하기"}
                >
                  <VscCopy/>
                </div>
              </div>
              {novel.isOpen && <p>{novel.novel}</p>}
            </Box>
          ))}
        </div>
      </div>
    </ResultPageStyle>
  )
}

export default ResultPage