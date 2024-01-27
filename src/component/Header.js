import styled from "styled-components";
import logo from "./../asset/logo.svg"
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

const HeaderStyle = styled.header`
  width: 100%;
  
  background-color: ${p => p.theme.color.Gray0};
  border-bottom: 2px solid ${p => p.theme.color.Gray2};
  
  position: fixed;
  top: 0;
  
  & > div {
    width: 100%;
    height: 100%;
    max-width: var(--max-page-content);

    padding: 16px 12px;
    margin: 0 auto;
    
    display: flex;
  }
  
  & ul {
    margin-left: 12px;
    
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  & ul li {
    font-size: 17px;
    font-weight: 400;
    
    cursor: pointer;
  }
`

const Header = () => {
  const headerElement = useRef()
  const menu = [
    {id: 0, name: "소설 만들기", path: "/generate"},
    {id: 1, name: "프로젝트 정보", path: "/info"},
  ]

  useEffect(() => {
    const height = headerElement.current.clientHeight
    document.documentElement.style.setProperty("--header-height", `${height}px`)
  })

  return (
    <HeaderStyle ref={headerElement}>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="로고"/>
        </Link>
        <ul>
          {menu.map(i => (
            <Link to={i.path}>
              <li key={i.id}>{i.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </HeaderStyle>
  )
}

export default Header