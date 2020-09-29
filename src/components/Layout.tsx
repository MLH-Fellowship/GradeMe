import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <StyledLayout>
      <Navbar />
      <StyledMain>{props.children}</StyledMain>
    </StyledLayout>
  );
};

export default Layout;
