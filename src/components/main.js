import React, { Component } from "react";
import Header from "./header/header";
import LandingPage from "./landingPage/landingPage";
import SignIn from "./auth/signIn/signIn";
import SignUp from "./auth/signUp/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer/footer";
import FilterAndProductListing from "./productListing/filterAndProductListing";
export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="shop" element={<FilterAndProductListing />} />   
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Main;
