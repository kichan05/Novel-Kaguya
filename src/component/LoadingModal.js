import styled, {keyframes} from "styled-components";
import Button from "./Button";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import {useEffect, useState} from "react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const scaleUp = keyframes`
  0% {
    transform: scale(0.975);
  }

  100% {
    transform: scale(1);
  }
`

const scaleDown = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.975);
  }
`

const ModalStyle = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  pointer-events: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  animation-name: ${fadeIn};
  animation-duration: 250ms;
  animation-timing-function: ease-out;
`

const ModalContent = styled.div`
  width: 100%;
  height: 300px;
  max-width: 600px;

  background-color: #fff;
  border-radius: 8px;
  padding: 12px;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation-name: ${scaleUp};
  animation-duration: 250ms;
  animation-timing-function: ease-out;

  & .title {
    font-size: 22px;
    font-weight: 600;

    margin-top: 12px;
  }

  & p {
    font-size: 18px;
  }
`

const A = keyframes`
  0% {
    transform: perspective(150px) rotateX(0deg) rotateY(0deg)
  }
  50% {
    transform: perspective(150px) rotateX(180deg) rotateY(0deg)
  }
  100% {
    transform: perspective(150px) rotateX(180deg) rotateY(180deg)
  }
`
const B = keyframes`
  0% {
    background: #ffa516
  }
  33% {
    background: #f03355
  }
  66% {
    background: #25b09b
  }
`
const Loading = styled.div`
  width: 60px;
  aspect-ratio: 1;
  animation: ${A} 1500ms infinite linear,
  ${B} 4500ms infinite steps(1) -.5s;
`


const LoadingModal = ({data}) => {
  return (
    <ModalStyle>
      <ModalContent>
        <Loading/>
        <div>
          <div className="title">소설을 만들고있어요</div>
          <p>
            제목: {data.title} <br/>
            장르: {data.tag} <br/>
            주인공: {data.mainCharacterName}
          </p>
        </div>
      </ModalContent>
    </ModalStyle>
  )
}

LoadingModal.defaultProps = {
  isShow: false
}

export default LoadingModal