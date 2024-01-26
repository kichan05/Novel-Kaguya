import styled, {css} from "styled-components";
import {useEffect, useState} from "react";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";

const ToastStyle = styled.div`
  color: ${p => p.theme.color.Gray2};
  background-color: rgba(73, 80, 87, 0.71);
  
  border-radius: 26px;
  padding: 12px 20px;

  display: inline-block;
  
  position: absolute;
  bottom: 15%;
  left: 50%;
  
  transform: ${p => p.isShow ? css`translate(-50%, 0) scale(1)` : css`translate(-50%, 0) scale(0.95)`};
  opacity: ${p => p.isShow ? 1 : 0};
  transition: 100ms;
`

export const ToastMessage = ({message}) => {
  const uiDispatch = useUiDispatch()
  const [toastMessage, setToastMessage] = useState()

  useEffect(() => {
    if(message != null){
      setToastMessage(message)
      setTimeout(() => {
        uiDispatch({type: UI_ACTION_TYPE.toast_hide})
      }, 1500)
    }
    else{

    }
  }, [message])

  return (
    <ToastStyle isShow={message !== null}>
      {toastMessage}
    </ToastStyle>
  )
}

ToastMessage.defaultProps = {
  message : null
}