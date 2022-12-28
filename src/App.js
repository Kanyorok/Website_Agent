import React,{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

