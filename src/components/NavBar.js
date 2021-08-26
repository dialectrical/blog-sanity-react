import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export const NavBar = () => {
  return (
    <Navbar color="light" expanded="md">
      <NavbarBrand href="/">Blog</NavbarBrand>
    </Navbar>
  );
};
