import React from "react";
import styled from "styled-components";

import { black, grey } from "../theme";

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 6rem;
`;

const StyledLabel = styled.label`
  color: ${black};
  font-size: 20px;
  display: inline-block;
  margin-bottom: 0.25rem;
`;

type StyleProp = {
  type: string;
};

const StyledInput = styled.input`
  width: ${(props: StyleProp): string =>
    props.type === "number" ? "4rem" : "auto"};
  border-radius: 26px;
  border: solid ${grey} 2px;
  color: ${grey};
  display: inline-block;
  font-size: 20px;
  padding: 0.25rem 1rem;
`;

type InputProps = {
  type: string;
  id: string;
  label: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = (props: InputProps) => {
  return (
    <StyledInputField>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledInput
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </StyledInputField>
  );
};

export default InputField;
