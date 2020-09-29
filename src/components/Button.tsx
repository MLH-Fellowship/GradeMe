import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { primaryColor, white } from "../theme";

const StyledGenericButton = css`
  background: ${primaryColor};
  color: ${white};
  border-radius: 25px;
  border: none;
  font-size: 20px;
  padding: 0.5rem 2rem;
`;

const StyledLinkButton = styled(Link)`
  ${StyledGenericButton};
`;

const StyledFunctionalButton = styled.button`
  ${StyledGenericButton};
`;
type ButtonProps = {
  children: string;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
const Button = (props: ButtonProps) => {
  return (
    <>
      {props.to ? (
        <StyledLinkButton to={props.to}>{props.children}</StyledLinkButton>
      ) : (
        <StyledFunctionalButton onClick={props.onClick}>
          {props.children}
        </StyledFunctionalButton>
      )}
    </>
  );
};

export default Button;
