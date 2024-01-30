import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useState} from "react";
import {LuImagePlus} from "react-icons/lu";
import {IconButton} from "../component/IconButton";
import InputLabel from "../component/InputLabel";
import {TextArea} from "../component/TextArea";

const PageStyle = styled.div`
  ${PageBasicStyle};
  
  background-color: #f00;
  
  & > .content {
    background-color: #0f0;
  }
`

const Page = () => {
  const uiDispatch = useUiDispatch()
  const [count, setCount] = useState("박희")
  return (
    <PageStyle>
      <div className="content">
        <Button onClick={() => uiDispatch({type:UI_ACTION_TYPE.modal_toggle})}>모달 토글</Button>

        <IconButton onClick={() => {alert("Hello World")}}><LuImagePlus/></IconButton>

        <InputLabel label={"이름"} value={count} onChange={e => setCount(e.target.value)} placeholder={"이름을 입력해주세요"}/>

        <TextArea value={count} onChange={e => setCount(e.target.value)}/>
        {count}
      </div>
    </PageStyle>
  )
}

export default Page