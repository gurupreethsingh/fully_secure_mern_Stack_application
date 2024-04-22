import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import PageNotFound from "./pages/PageNotFound";
import ResetPassword from "./pages/auth/ResetPassword";
import LoginWithCode from "./pages/auth/LoginWithCode";
import Profile from "./pages/profile/Profile";
import Verify from "./pages/auth/Verify";
import ChangePassword from "./pages/changePassword/ChangePassword";
import Users from "./pages/users/Users";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5 mb-5 ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

          <Route path="/changePassword" element={<ChangePassword />}></Route>

          <Route path="/users" element={<UserList />}></Route>

          <Route path="/allusers" element={<Users />}></Route>
          <Route
            path="/loginwithcode/:email"
            element={<LoginWithCode />}
          ></Route>
          <Route
            path="/resetpassword/:resetToken"
            element={<ResetPassword />}
          ></Route>

          <Route path="/verify/:verificationToken" element={<Verify />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/pagenotfound" element={<PageNotFound />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
