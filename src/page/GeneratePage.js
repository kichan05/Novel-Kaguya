import styled, {keyframes} from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle";
import InputLabel from "../component/InputLabel";
import {useEffect, useState} from "react";
import {TextAreaLabel} from "../component/TextArea";
import Button from "../component/Button";
import {useNavigate} from "react-router-dom";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import axios from "axios";

const GeneratePageStyle = styled.div`
  ${PageBasicStyle};

  & .input-wrap {
    margin-top: 15px;
  }

  & .tag-name-input-wrap {
    display: flex;
    flex-direction: row;
    gap: 12px;

    & > * {
      flex: 1;
    }

    @media screen and (max-width: 550px) {
      flex-direction: column;
    }
  }

  .tag-wrap {
    .label {
      font-size: 15px;
      font-weight: 400;
    }

    .radio-group {
      padding: 4px;
      margin-top: 10px;

      display: flex;

      * {
        flex: 1;
      }
    }
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
  const navigate = useNavigate()
  const uiDispatch = useUiDispatch()

  const tagList = ["판다지", "로맨스", "액션", "일상"]

  const [inputValues, setInputValues] = useState({
    title: "", tag: tagList[0], mainCharacterName: "",
    plot: ""
  })
  const [isGenerateAble, setGenerateAble] = useState(false)

  const inputChange = e => {
    const {name, value} = e.target
    setInputValues({...inputValues, [name]: value})
  }

  const generateNovel = async (prompt) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL

    const res = await axios.post(
      `http://${BASE_URL}/generate`,
      prompt
    ).then(res => res.data)

    return res["novel"]
  }

  const onSubmit = async e => {
    e.preventDefault()

    uiDispatch({type: UI_ACTION_TYPE.modal_show, data: inputValues})

    const novel = await generateNovel(inputValues)

    setTimeout(() => {
      uiDispatch({type: UI_ACTION_TYPE.modal_hide})
      navigate("/result", {
        state: {
          prompt: inputValues,
          novel
        }
      })
    }, 3000)
  }

  useEffect(() => {
    const temp = Object.values(inputValues).map(i => {
      return i !== undefined && i.length >= 1
    })
    setGenerateAble(temp.filter(i => !i).length === 0)
  }, [inputValues])

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
            <div className="tag-wrap">
              <div className="label">장르</div>
              <div className={"radio-group"}>
                {tagList.map(i => (
                  <label>
                    <input
                      type={"radio"} name={"tag"} value={i}
                      id={i}
                      checked={i === inputValues.tag}
                      onChange={inputChange}/> {i}
                  </label>
                ))}
              </div>
            </div>
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
            <Button disabled={!isGenerateAble}>
              소설 제작하기
            </Button>
          </div>
        </form>
      </div>
    </GeneratePageStyle>
  )
}

export default GeneratePage