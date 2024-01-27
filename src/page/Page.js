import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useState} from "react";
import {LuImagePlus} from "react-icons/lu";
import {IconButton} from "../component/IconButton";

const PageStyle = styled.div`
  ${PageBasicStyle};
  
  background-color: #f00;
  
  & > .content {
    background-color: #0f0;
  }
`

const Page = () => {
  const uiDispatch = useUiDispatch()
  const [count, setCount] = useState(0)

  return (
    <PageStyle>
      <div className="content">
        <Button onClick={() => uiDispatch({type:UI_ACTION_TYPE.modal_toggle})}>모달 토글</Button>

        <IconButton onClick={() => {alert("Hello World")}}><LuImagePlus/></IconButton>
      </div>
    </PageStyle>
  )
}

export default Page