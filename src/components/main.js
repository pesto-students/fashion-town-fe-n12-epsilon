import React, { Component } from "react";
import Header from "./header/header";
import LandingPage from "./landingPage/landingPage";
import SignIn from "./auth/signIn/signIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Main;
