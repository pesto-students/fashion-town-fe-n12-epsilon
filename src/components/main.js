import React, { Component } from "react";
import Header from "./header/header";
import LandingPage from "./landingPage/landingPage";
import SignIn from "./auth/signIn/signIn";
import SignUp from "./auth/signUp/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer  from "./footer/footer";

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default Main;
