import styled from "styled-components";
import {useEffect, useRef} from "react";

const FooterStyle = styled.footer`
  & > div {
    width: 100%;
    height: 100%;
    max-width: ${p => p.theme.size.mobileMaxWidth}px;
    
    padding: 12px;
    margin: 0 auto;
  }
`

const Footer = () => {
  const footerElement = useRef()

  useEffect(() => {
    const height = footerElement.current.clientHeight
    document.documentElement.style.setProperty("--footer-height", `${height}px`)
  }, [])

  return (
    <FooterStyle>
      <div ref={footerElement}>
        푸터
      </div>
    </FooterStyle>
  )
}

export default Footer