import styled, {css} from "styled-components";
import {lighten} from "polished";

const ButtonColor = css`
  ${({theme, textColor, background}) => {
  let bgColor;
  if (background.slice(0, 1) === "#") {
    bgColor = background
  } else {
    bgColor = theme.color[background]
  }

  let txtColor;
  if (textColor.slice(0, 1) === "#") {
    txtColor = textColor
  } else {
    txtColor = theme.color[textColor]
  }

  return css`
      color: ${txtColor};
      background-color: ${bgColor};

      &:hover, &:focus {
        background-color: ${lighten(0.05, bgColor)};
      }

      &:active {
        background-color: ${bgColor};
      }
    `
}}
`

const ButtonStyle = styled.button`
  width: ${props => props.isFullWidth ? '100%' : 'unset'};
  font-size: 16px;
  font-weight: 500;

  border-radius: 6px;
  padding: 12px;

  ${ButtonColor};
  
  transition: 200ms;
  display: inline-flex;
  justify-content: center;
  
  user-select: none;
  
  &:hover, &:focus {
    transform: translateY(-2px);
  }
`

const Button = ({children, textColor, background, isFullWidth, ...rest}) => {
  return (
    <ButtonStyle textColor={textColor} background={background} isFullWidth={isFullWidth} {...rest}>{children}</ButtonStyle>
  )
}

Button.defaultProps = {
  textColor: "Gray1",
  background: "HeechanBlue",
  isFullWidth: false,
}

export default Button