import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export const NavBar = () => {
  return (
    <Navbar color="dark" dark expanded="md">
      <NavbarBrand href="/">dialectrical's blog</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/archive">Archive</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
