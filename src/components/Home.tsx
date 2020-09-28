import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// TODO: Optimize layout for smaller screens
const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Background styles */
  background-image: repeating-linear-gradient(
      transparent,
      transparent 35px,
      rgba(255, 255, 255, 0.25) 35px,
      rgba(255, 255, 255, 0.25) 36px
    ),
    repeating-linear-gradient(
      90deg,
      #8c39f5,
      #8c39f5 35px,
      #a96bf7 35px,
      #a96bf7 36px
    );
  h2 {
    font-size: 72px;
    font-weight: 600;
  }

  h1 {
    font-size: 144px;
    font-weight: 600;
  }

  p {
    font-size: 20px;
  }
`;

const StyledButton = styled.button`
  background: #fff;
  border-radius: 25px;
  border: none;
  color: #8c39f5;
  font-size: 20px;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Home = () => {
  const signIn = () => {
    // TODO: Firebase authentication
  };

  return (
    <StyledHome>
      <h2>GradeMe</h2>
      <h1>Sign In</h1>
      <StyledButton onClick={signIn}>Sign in with Github</StyledButton>
      <StyledLink to="/calculator">Back to calculator</StyledLink>
    </StyledHome>
  );
};

export default Home;
