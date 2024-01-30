import Input from "./Input";
import styled from "styled-components";

const InputLabelStyle = styled.div`
  & .label {
    font-size: 15px;
    font-weight: 400;
  }
  
  & input {
    margin-top: 2px;
  }
`

const InputLabel = ({label, ...rest}) => {
  return (
    <InputLabelStyle>
      <div className={"label"}>{label}</div>
      <Input {...rest}/>
    </InputLabelStyle>
  )
}

export default InputLabel