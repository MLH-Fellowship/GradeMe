import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { black, primaryColor } from "../theme";
import Button from "./Button";
import HowToModal from "./HowToModal";

// TODO: Mobile styling
const StyledNav = styled.nav`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  color: ${black};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledHowTo = styled.p`
  color: ${primaryColor};
  font-size: 24px;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  color: ${primaryColor};
  text-decoration: none;

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 24px;
    margin-right: 2rem;
  }
`;

// TODO: Conditionally rendered Signin/Profile button for authentication
const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StyledNav>
        <StyledLink to="/">
          <h1>GradeMe</h1>
        </StyledLink>
        <NavLinks>
          <StyledHowTo onClick={() => setModalOpen(true)}>How to</StyledHowTo>
          <StyledLink as="a" href="https://github.com/MLH-Fellowship/GradeMe">
            <p>Github</p>
          </StyledLink>
          <Button to="/">Sign In</Button>
        </NavLinks>
        <HowToModal open={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
      </StyledNav>
    </>
  );
};

export default Navbar;
