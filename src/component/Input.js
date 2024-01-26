import styled from "styled-components";

const InputStyle = styled.input`
  color: ${p => p.theme.color.Gray8};
  font-size: 16px;
  font-weight: 400;
  
  border: 1px solid ${p => p.theme.color.Gray4};
  border-radius: 6px;
  
  padding: 12px;
  background-color: ${props => props.theme.color.Gray1};
  
  &::placeholder {
    font-weight: 500;
    opacity: 0.7;
  }

  &:focus {
    border: 1px solid ${p => p.theme.color.Gray5};
  }
`

const Input = ({...rest}) => {
  return (
    <InputStyle {...rest}/>
  )
}

export default Input