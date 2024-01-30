import styled from "styled-components";

const TextAreaStyle = styled.textarea`
  width: 100%;

  color: ${p => p.theme.color.Gray8};
  font-size: 16px;
  font-weight: 400;

  border: 1px solid ${p => p.theme.color.Gray4};
  border-radius: 6px;

  padding: 12px;
  background-color: ${props => props.theme.color.Gray1};

  resize: ${p => p.resize};

  &::placeholder {
    font-weight: 500;
    opacity: 0.7;
  }

  &:focus {
    border: 1px solid ${p => p.theme.color.Gray5};
  }
`

export const TextArea = ({line, resize, ...rest}) => {
  return (
    <TextAreaStyle rows={line} resize={resize} {...rest}></TextAreaStyle>
  )
}

TextArea.defaultProps = {
  line: 3,
  resize: "none"
}

const TextAreaLabelStyle = styled.label`
  & .label {
    font-size: 15px;
  }
`

export const TextAreaLabel = ({label, value, ...rest}) => {
  return (
    <TextAreaLabelStyle>
      <div className="label">{label}</div>
      <TextArea {...rest}>{value}</TextArea>
    </TextAreaLabelStyle>
  )
}