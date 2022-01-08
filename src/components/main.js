import React, { Component } from "react";
import Header from "./header/header";
import LandingPage from "./landingPage/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Main;
