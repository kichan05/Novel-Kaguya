import {GlobalStyle} from "./style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import {size, Theme} from "./style/theme";
import Header from "./component/Header";
import Footer from "./component/Footer";
import UiSection from "./section/UiSection";
import React, {useEffect} from "react";
import {UiContextProvider} from "./context/UiReducer";
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "./page/MainPage";
import GeneratePage from "./page/GeneratePage";
import InfoPage from "./page/InfoPage";

function App() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    if(pathname === "/"){
      document.documentElement.style.setProperty("--max-page-content", "600px")
    }
    else {
      document.documentElement.style.setProperty("--max-page-content", `${size.mobileMaxWidth}px`)
    }

  }, [pathname])

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Resize/>

        <UiContextProvider>
          <Header/>

          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/generate" element={<GeneratePage/>}/>
            <Route path="/info" element={<InfoPage/>}/>
          </Routes>

          <Footer/>
          <UiSection/>
        </UiContextProvider>

      </ThemeProvider>
    </div>
  );
}

export default App;
