import React, { useState } from "react";
import styled from "styled-components";

import Button from "../Button";
import InputField from "../InputField";
import Layout from "../Layout";

const StyledCalculatorPage = styled.div`
  h1 {
    font-size: 64px;
    font-weight: 900;
  }
`;

const GradeInput = styled.div``;

const InputFields = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

type assignment = {
  name: string;
  grade: number;
  weight: number;
};

const Calculator = () => {
  const [assignmentList, setAssignmentList] = useState<assignment[]>([]);
  const [nameField, setNameField] = useState("");
  const [gradeField, setGradeField] = useState();
  const [weightField, setWeightField] = useState();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch(event.target.id) {
      case "nameField":
        setNameField(event.target.value);
        break;
      case "gradeField":
        setGradeField(event.target.value);
        break;
      case "weightField":
        setWeightField(event.target.value);
        break;
    }
  };

  const addAssignment = () => {
    const assignment = {
      name: nameField,
      grade: gradeField,
      weight: weightField
    };

    setAssignmentList([...assignmentList, assignment]);
  };

  return (
    <Layout>
      <StyledCalculatorPage>
        <GradeInput>
          <h1>Input your grades</h1>
          <InputFields>
            <InputField
              type="text"
              id="nameField"
              label="Assignment Name"
              value={nameField}
              onChange={changeHandler}
            />
            <InputField
              type="number"
              id="gradeField"
              label="Grade"
              value={gradeField}
              onChange={changeHandler}
            />
            <InputField
              type="number"
              id="weightField"
              label="Weight"
              value={weightField}
              onChange={changeHandler}
            />
          </InputFields>
          <Button onClick={addAssignment}>Add assignment</Button>
        </GradeInput>
      </StyledCalculatorPage>
    </Layout>
  );
};

export default Calculator;
