import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Topbar from "./Components/Topbar"
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Forgotpwd from './Components/Forgotpwd';
import VerifyOtp from './Components/VerifyOtp';
import Resetpwd from './Components/Resetpwd';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
   <Topbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create/account' element={<CreateAccount/>}/>
      <Route path='/forgot/pwd' element={<Forgotpwd/>}/>
      <Route path='/verify/otp' element={<VerifyOtp/>}/>
      <Route path='/reset/pwd' element={<Resetpwd/>}/>
    </Routes>
    </BrowserRouter>
    // <>
    // <Topbar></Topbar>
    // <Login></Login>
    // </>
  );
}

export default App;
