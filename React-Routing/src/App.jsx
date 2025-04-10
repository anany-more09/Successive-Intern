
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import About from "./pages/about"
import Constacts from "./pages/constacts"



function App() {


  return (

    <>
    <Header/>
    <BrowserRouter>
       <Routes>
          <Route path= "/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Constacts" element={<Constacts/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App
