import styled from "styled-components";
import {useEffect, useRef} from "react";

const FooterStyle = styled.footer`
  background-color: ${p => p.theme.color.Gray3};
  
  & > div {
    width: 100%;
    height: 100%; 
    max-width: ${p => p.theme.size.mobileMaxWidth}px;
    
    padding: 16px 20px;
    margin: 0 auto;
    
    & h6 {
      margin-bottom: 6px;
    }
    
    & a:hover {
      text-decoration: underline;
    }
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
        <h6>Novel Kaguya</h6>
        <p><a href="https://kichan.dev" target="_blank">개발, 디자인, 기획 : 박희찬</a></p>
        <p><a href="https://github.com/kichan.dev/Novel-Kaguya" target="_blank">오픈소스 프로젝트</a></p>
        <p><a href="https://toss.me/바키찬희찬" target="_blank">개발자 후원</a></p>
      </div>
    </FooterStyle>
  )
}

export default Footer