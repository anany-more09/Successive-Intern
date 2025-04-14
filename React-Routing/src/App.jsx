
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import About from "./pages/about"
import Header from "./components/Headers/Header";
import SignUp from "./components/Headers/SignUp";
import Login from "./components/Headers/Login";




function App() {


  return (

    <>
    <Header/>
       <Routes>
          <Route path= "/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login"  element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path ="/signUp" element={<SignUp />}/>
       </Routes>
       <Login/>
    
    </>
  );
}

export default App
