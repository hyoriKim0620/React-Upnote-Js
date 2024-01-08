// import React from 'react';
import NavList from "./NavList";
import { NavContainer } from "./Nav.styles";

const Nav = ({ division, showNavBar }) => {
  return (
    <NavContainer id={`nav_container`} $show={showNavBar} $division={division}>
      <div>
        <NavList cmd={division} />
      </div>
    </NavContainer>
  );
};

export default Nav;
