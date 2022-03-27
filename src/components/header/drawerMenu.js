import React from "react";
import { NavLink } from "react-router-dom";
import { NavText } from "./headerStyledComponent";
import links from "config/routeLinks";
import Auth from "components/auth";
import Cart from "components/cart";
function DrawerMenu() {
  return (
    <>
      <NavLink to={links.shop + links.menSection}>
        <NavText>MEN</NavText>
      </NavLink>
      <NavLink to={links.shop + links.womenSection}>
        <NavText>WOMEN</NavText>
      </NavLink>
      <NavLink to={links.shop + links.accessoriesSection}>
        <NavText>ACCESSORIES</NavText>
      </NavLink>
      <NavLink to={links.shop + links.livingSections}>
        <NavText>LIVING</NavText>
      </NavLink>
      <Auth />
      <Cart />
    </>
  );
}

export default DrawerMenu;
