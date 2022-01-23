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
import InvalidRoute from "./result/invalidRoute";
import { ContentSectionWrapper } from "./contentSection/contentSectionStyledComponent";
import links from "../config/routeLinks";

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <ContentSectionWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path={links.signIn} element={<SignIn />} />
            <Route path={links.signUp} element={<SignUp />} />
            <Route path={links.shop} element={<FilterAndProductListing />} />
            <Route
              path={`${links.product}/:id`}
              element={<ProductDetailsPage />}
            />
            <Route path={links.checkout} element={<CheckOutPage />} />
            <Route path={links.orderHistory} element={<OrderHistory />} />
            <Route path="*" element={<InvalidRoute />} />
          </Routes>
        </ContentSectionWrapper>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Main;
