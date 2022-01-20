import React, { Component } from "react";
import Header from "./header/header";
import LandingPage from "./landingPage/landingPage";
import SignIn from "./auth/signIn/signIn";
import SignUp from "./auth/signUp/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer/footer";
import FilterAndProductListing from "./productListing/filterAndProductListing";
import ProductDetailsPage from "./productDetails/productDetailsPage.js";
import CheckOutPage from "./checkout/checkOutPage";
import OrderHistory from "./orderHistory/orderHistory";
import InvalidRoute from "./invalidRoute/invalidRoute";
import { ContentSectionWrapper } from "./contentSection/contentSectionStyledComponent";

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <ContentSectionWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="shop" element={<FilterAndProductListing />} />
            <Route path="product/:id" element={<ProductDetailsPage />} />
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="orderHistory" element={<OrderHistory />} />
            <Route path="*" element={<InvalidRoute />} />
          </Routes>
        </ContentSectionWrapper>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Main;
