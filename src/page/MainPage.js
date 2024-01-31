import React, {useEffect} from "react";
import styled, {css} from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import aiImage from "./../asset/novel_kaguya.jpg"
import Button from "../component/Button";
import {useCallback, useRef, useState} from "react";
import {useNavigate} from 'react-router-dom';

const MainPageStyle = styled.div`
  ${PageBasicStyle};
  display: flex;
  align-items: center;

  & .top-content {
    width: 100%;
    padding-top: 38px;

    display: inline-flex;
    gap: 20px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  & .top-content > * {
    flex: 1 0 0;
  }

  .ai-img-wrap {
    width: 100%;
    aspect-ratio: 1 / 1;

    position: relative;

    & img {
      width: 100%;
      border-radius: 4px;
      
      transition: filter 200ms;

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    
    & .img2 {
      z-index: -2;
      opacity: 0.25;
      //filter: grayscale(200%);
    }
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

const MainPage = () => {
  const infoElement = useRef()
  const navigate = useNavigate();
  const [imageMouse, setImageMouse] = useState({
    x: 0, y: 0, isMouseIn: false, size: 70
  })

  const onMouseMove = (e) => {
    const {clientX, clientY, target} = e
    const {top, left} = target.getBoundingClientRect()

    const x = clientX - left
    const y = clientY - top

    setImageMouse({
      ...imageMouse,
      x, y, isMouseIn: true
    })
  }

  const onMouseLeave = () => {
    setImageMouse({
      ...imageMouse, isMouseIn: false
    })
  }

  const goGenerate = useCallback(() => {
    navigate("/generate", {
      replace: false
    })
  }, [])

  return (
    <MainPageStyle>
      <div className="content">
        <div className="top-content">
          <div className="ai-image">
            <div
              className="ai-img-wrap"
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            >
              <img
                src={aiImage} alt="" style={{
                  clipPath: imageMouse.isMouseIn ? `circle(${imageMouse.size}px at ${imageMouse.x}px ${imageMouse.y}px)` : "none",
                }}
                className={"img1"}
              />
              <img src={aiImage} alt="" className={"img2"}/>
            </div>
          </div>
          <div className="info">
            <div ref={infoElement}>
              <h2>소설 만드는 인공지능</h2>
              <h1>Novel Kaguya</h1>
              <p>1000개의 소설을 학습한 인공지능이 당신이 원하는 소설을 만들어줍니다.</p>
              <Button onClick={goGenerate}>사용해보기</Button>
            </div>
          </div>
        </div>
        {/*<NovelCover></NovelCover>*/}
      </div>
    </MainPageStyle>
  )
}

export default React.memo(MainPage)