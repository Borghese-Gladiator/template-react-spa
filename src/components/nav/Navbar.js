import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">{props.name}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="/#characters">CHARACTERS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#summary">SUMMARY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#gallery">GALLERY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#clips">CLIPS</NavLink>
            </NavItem>
          </Nav>
          <NavLink href="https://kissanime.ru/Anime/Charlotte">WATCH</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;