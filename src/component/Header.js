import styled from "styled-components";
import {useEffect, useRef} from "react";

const HeaderStyle = styled.header`
  width: 100%;
  
  background-color: ${p => p.theme.color.Gray1};
  
  position: fixed;
  top: 0;
  
  & > div {
    width: 100%;
    height: 100%;
    max-width: ${p => p.theme.size.mobileMaxWidth}px;

    padding: 20px 16px;
    margin: 0 auto;
  }
  
  & h1 {
    font-size: 28px;
  }
`

const Header = () => {
  const headerElement = useRef()
  useEffect(() => {
    const height = headerElement.current.clientHeight
    console.log(height)
    document.documentElement.style.setProperty("--header-height", `${height}px`)
  })
  return (
    <HeaderStyle ref={headerElement}>
      <div>
        <h1>헤더</h1>
      </div>
    </HeaderStyle>
  )
}

export default Header