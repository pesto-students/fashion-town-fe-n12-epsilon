import React, { Component } from "react";
import Header from "./header/header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Main;
