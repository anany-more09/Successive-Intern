
import { Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard/dashboard";
import About from "./pages/about"
import Header from "./components/Headers/Header";
import SignUp from "./components/Headers/SignUp";
import Login from "./components/Headers/Login";
import Profile from "./pages/dashboard/Profile";
import Setting from "./pages/dashboard/Setting";
import Themes from "./pages/dashboard/Themes";
import Main from "./components/Main/Main";

function App() {
  return (
  
    <>
    <Header/>
    <Main/>
       <Routes>
          <Route path= "/"      element={<Home />} />
          <Route path="/about"  element={<About/>} />
          <Route path="/login"  element={<Login />}/>

          <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="profile"  element={<Profile/>}/>
                <Route path="setting"  element={<Setting/>}/>
                <Route path="Themes"  element={<Themes/>}/>
          </Route>

          <Route path ="/signUp" element={<SignUp />}/>
       </Routes>
    </>
  );
}

export default App;

