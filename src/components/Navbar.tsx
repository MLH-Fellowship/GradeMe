import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div``;

// TODO: Signin/Profile button for authentication
const Navbar = () => {
  return (
    <StyledNav>
      <Link to="/">
        <h1>GradeMe</h1>
      </Link>
      <NavLinks>
        <Link to="/">
          <p>How to</p>
        </Link>
      </NavLinks>
    </StyledNav>
  );
};

export default Navbar;
