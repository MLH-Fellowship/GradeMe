import React, { useState } from "react";
import styled from "styled-components";

import AssignmentList from "./AssignmentList";
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
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

type assignment = {
  id: string;
  name: string;
  grade: number;
  weight: number;
};

// TODO: Styling, layout
// TODO: Add results section that calculates grade weights
const Calculator = () => {
  const [assignmentList, setAssignmentList] = useState<assignment[]>([]);
  const [nameField, setNameField] = useState("");
  const [gradeField, setGradeField] = useState(0);
  const [weightField, setWeightField] = useState(0);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch(event.target.id) {
      case "nameField":
        setNameField(event.target.value);
        break;
      case "gradeField":
        setGradeField(parseInt(event.target.value) || 0);
        break;
      case "weightField":
        setWeightField(parseInt(event.target.value) || 0);
        break;
    }
  };

  const addAssignment = () => {
    if (!nameField || !gradeField || !weightField) return;
   
    const date = new Date();
    
    const assignment = {
      id: `${nameField}-${date}`,
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
        <AssignmentList assignments={assignmentList} />
      </StyledCalculatorPage>
    </Layout>
  );
};

export default Calculator;
