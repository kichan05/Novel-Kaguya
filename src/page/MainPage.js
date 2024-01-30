import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import aiImage from "./../asset/novel_kaguya.jpg"
import Button from "../component/Button";
import {useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';
import InputLabel from "../component/InputLabel";
import Input from "../component/Input";

const MainPageStyle = styled.div`
  ${PageBasicStyle};
  display: flex;
  align-items: center;

  & > .content {
    height: calc(var(--vh) * 100 - var(--header-height));

    padding-top: 38px;
    
    display: inline-flex;
    gap: 20px;
    
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  & > .content > * {
    flex: 1 0 0;
  }

  .ai-image {
    
  }

  .info {
    padding: 20px 0;
    
    & div > * {
      width: 100%;
    }
    
    & h2 {
      font-size: 23px;
      font-weight: 400;
    }

    & h1 {
      font-size: 32px;
      font-weight: 600;
      
      margin-top: -10px;
    }
    
    & p {
      color: var(--Gray-Gray-8, #343A40);
      font-size: 16px;
      font-weight: 400;
      
      margin-top: 16px;
    }
    
    & button {
      margin-top: 30px;
    }
  }
`

const AiImage = styled.img`
  width: 100%;
  border-radius: 4px;
  
  clip-path: ${p => {
    const {x, y, isMouseIn} = p.mouse
    if(isMouseIn){
      return `circle(30% at ${x}px ${y}px)`
    }
    else {
      return "none"
    }
  }};
`

const MainPage = () => {
  const infoElement = useRef()
  const navigate = useNavigate();
  const [imageMouse, setImageMouse] = useState({
    x: 0, y: 0, isMouseIn : false
  })
  //
  // const onMouseOut = () => {
  //   setImageMouse({...imageMouse, isMouseIn: false})
  // }
  // const onMouseMove = (e) => {
  //   const {clientX, clientY, target} = e
  //   // const x = target
  //   setImageMouse({
  //     x: clientX, y: clientY, isMouseIn: true
  //   })
  // }

  return (
    <MainPageStyle>
      <div className="content">
        <div className="ai-image">
          <AiImage
            src={aiImage} alt="AI 대표 이미지"
            mouse={imageMouse}
            // onMouseMove={onMouseMove}
            // // onMouseEnter={onMouseEnter}
            // onMouseOut={onMouseOut}
          />
        </div>
        <div className="info">
          <div ref={infoElement}>
            <h2>소설 만드는 인공지능</h2>
            <h1>Novel Kaguya</h1>
            <p>1000개의 소설을 학습한 인공지능이 당신이 원하는 소설을 만들어줍니다.</p>
            <Button onClick={() => navigate("/generate", {
              replace: false
            })}>사용해보기</Button>
          </div>
        </div>
      </div>
    </MainPageStyle>
  )
}

export default MainPage