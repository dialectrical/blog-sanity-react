import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" style={{ padding: "1%" }}>
      <NavbarBrand href="/">dialectrical's blog</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/about-me">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/archive">Archive</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
