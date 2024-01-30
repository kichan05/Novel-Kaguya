import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import Input from "../component/Input";
import InputLabel from "../component/InputLabel";
import {useEffect, useState} from "react";
import {TextArea, TextAreaLabel} from "../component/TextArea";
import Button from "../component/Button";

const GeneratePageStyle = styled.div`
  ${PageBasicStyle};
  
  & .input-wrap {
    margin-top: 15px;
  }
  
  & .tag-name-input-wrap {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  & .tag-name-input-wrap > * {
    flex: 1;
  }
  
  & .submit-wrap {
    margin-top: 43px;
    display: flex;
    justify-content: right;
  }
  
  & .submit-wrap button {
    width: 174px;
  }
`

const GeneratePage = () => {
  const [inputValues, setInputValues] = useState({
    title: "", tag: "", mainCharacterName: "",
    plot: ""
  })
  const [isGenerateAble, setGenerateAble] = useState(false)

  useEffect(() => {
    const temp = Object.values(inputValues).map(i => {
      return i !== undefined && i.length >= 1
    })
    setGenerateAble(temp.filter(i => !i).length === 0)
  }, [inputValues])

  const inputChange = e => {
    const {name, value} = e.target
    setInputValues({...inputValues, [name]: value})
  }

  const onSubmit = e => {
    e.preventDefault()

    alert("ㅋㅋ")
  }

 return (
  <GeneratePageStyle>
    <div className="content">
      <form onSubmit={onSubmit}>
        <div className="title-input-wrap input-wrap">
          <InputLabel
            label="제목" name={"title"}
            value={inputValues["title"]}
            onChange={inputChange}
          />
        </div>
        <div className="tag-name-input-wrap input-wrap">
          <InputLabel
            label="장르" name={"tag"}
            value={inputValues["tag"]}
            onChange={inputChange}
          />
          <InputLabel
            label="주인공 이름" name={"mainCharacterName"}
            value={inputValues["mainCharacterName"]}
            onChange={inputChange}
          />
        </div>
        <div className="plot-input-wrap input-wrap">
          <TextAreaLabel
            label={"줄거리"} line={5} resize={"vertical"}
            name={"plot"}
            value={inputValues.plot} onChange={inputChange}/>
        </div>
        <div className="submit-wrap">
          <Button disabled={!isGenerateAble}>소설 제작하기</Button>
        </div>
      </form>
    </div>
  </GeneratePageStyle>
 )
}

export default GeneratePage