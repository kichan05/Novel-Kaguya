import {GlobalStyle} from "./style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {Resize} from "./component/Resize";
import {size, Theme} from "./style/theme";
import Header from "./component/Header";
import Footer from "./component/Footer";
import UiSection from "./section/UiSection";
import React, {useEffect} from "react";
import {UiContextProvider} from "./context/UiReducer";
import {Route, Routes, ScrollRestoration, useLocation} from "react-router-dom";
import MainPage from "./page/MainPage";
import GeneratePage from "./page/GeneratePage";
import InfoPage from "./page/InfoPage";
import ResultPage from "./page/ResultPage";

function App() {
  const {pathname} = useLocation()
  console.log(useLocation())

  useEffect(() => {
    window.scrollTo(0, 0)

    if(pathname === "/"){
      document.documentElement.style.setProperty("--max-page-content", "700px")
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
          {/*<Page/>*/}
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/generate" element={<GeneratePage/>}/>
            <Route path="/result" element={<ResultPage/>}/>
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
