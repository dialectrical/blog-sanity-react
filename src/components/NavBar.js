import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export const NavBar = () => {
  return (
    <Navbar color="dark" dark expanded="md">
      <NavbarBrand href="/">Blog</NavbarBrand>
      <Nav className="mr-auto" inNavbar>
        <NavItem>
          <NavLink href="/archive">Archive</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
