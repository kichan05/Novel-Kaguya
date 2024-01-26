import {useEffect} from "react";

export const Resize = () => {
  const handleResize = () => {
    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
  return <div></div>
}