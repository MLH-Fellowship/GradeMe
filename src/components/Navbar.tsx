import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { black, primaryColor } from "../theme";
import Button from "./Button";

// TODO: Mobile styling
const StyledNav = styled.nav`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  color: ${black};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${primaryColor};
  text-decoration: none;

  h1 {
    font-size: 36px;
  }

  p {
    font-size:24px;
    margin-right: 2rem;
  }
`;

// TODO: Conditionally rendered Signin/Profile button for authentication
const Navbar = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <h1>GradeMe</h1>
      </StyledLink>
      <NavLinks>
        <StyledLink to="/">
          <p>How to</p>
        </StyledLink>
        <Button to="/">Sign In</Button>
      </NavLinks>
    </StyledNav>
  );
};

export default Navbar;
