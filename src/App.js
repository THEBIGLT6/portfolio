import MenuBar from "./MenuBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import {Route, Routes } from "react-router-dom"

function App() {


  return(
    <>
    <MenuBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </>
  ) 
}

export default App;
