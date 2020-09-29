import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { primaryColor, white, gridLineColor } from "../theme";

// TODO: Optimize layout for smaller screens
const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* Background styles */
  background-image: repeating-linear-gradient(
      transparent,
      transparent 35px,
      ${gridLineColor} 35px,
      ${gridLineColor} 36px
    ),
    repeating-linear-gradient(
      90deg,
      ${primaryColor},
      ${primaryColor} 35px,
      ${gridLineColor} 35px,
      ${gridLineColor} 36px
    );

  h2 {
    font-size: 72px;
    font-weight: 600;
    margin: 2rem 0 -2rem 0;
  }

  h1 {
    font-size: 144px;
    font-weight: 600;
    margin: 0 0 2rem 0;
  }

  p {
    font-size: 20px;
  }
`;

const StyledButton = styled.button`
  background: ${white};
  border-radius: 25px;
  border: none;
  color: ${primaryColor};
  font-size: 20px;
  padding: 0.5rem 2rem;
  margin: 1rem 0 1rem 0;
  
  &:hover {
    cursor: pointer;
  }
`;

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${white};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const UnderlineLink = styled.a`
  color: ${white};
  text-decoration: underline;
`;

const Home = () => {
  const signIn = () => {
    // TODO: Firebase authentication
  };

  return (
    <StyledHome>
      <h2>GradeMe</h2>
      <StyledOptions>
        <h1>Sign In</h1>
        <StyledButton onClick={signIn}>Sign in with Github</StyledButton>
        <StyledLink to="/calculator">Back to calculator</StyledLink>
      </StyledOptions>
      <p>
        Created with ❤️ by{" "}
        <UnderlineLink href="https://github.com/spellew">
          Shamroy,
        </UnderlineLink>{" "}
        <UnderlineLink href="https://github.com/tomdng">Tommy,</UnderlineLink>{" "}
        and <UnderlineLink href="https://github.com/Walsker">Wal</UnderlineLink>
      </p>
    </StyledHome>
  );
};

export default Home;
