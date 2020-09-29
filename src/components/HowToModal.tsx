import React from "react";
import styled from "styled-components";

import { primaryColor, white } from "../theme";

const ModalBackground = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  z-index: 100;
  padding: 3rem 3rem;
  background: ${white};
  border-radius: 10px;
  color: ${primaryColor};
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 20px;
    margin: 0 0 1rem 0;
  }
`;

type ModalProps = {
  open: boolean;
  toggle: () => void;
};

const HowToModal = (props: ModalProps) => {
  return (
    <>
      {props.open ? (
        <ModalBackground onClick={props.toggle}>
          <Modal>
            <h1>How do I use this?</h1>
            <p>
              Just add the grade you got out of 100, and enter the weight of
              that assignment out of 100
            </p>
            <p>
              The best/worst grade is calculated by using the remaining weight
              of your assignments that don't have a grade yet.
            </p>
          </Modal>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default HowToModal;
