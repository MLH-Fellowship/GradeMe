import React, { useState, useEffect } from "react";
import { isUserSignedIn } from "../../firebase/auth";
import { getDocuments, storeDocument } from "../../firebase/storage";
import { isInitialized } from "../../firebase";
import styled from "styled-components";

import AssignmentList from "./AssignmentList";
import Button from "../Button";
import InputField from "../InputField";
import Layout from "../Layout";
import Stats from "./Stats";

const StyledCalculatorPage = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  h1 {
    font-size: 64px;
    font-weight: 900;
    margin-bottom: 0;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 0;
  }
`;

const GradeInput = styled.div`
  margin: 0 4rem 4rem 0;
`;

const InputFields = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

type assignment = {
  id: string;
  name: string;
  grade: number;
  weight: number;
};

const Calculator = (props: any) => {
  const [assignmentList, setAssignmentList] = useState<assignment[]>([]);
  const [nameField, setNameField] = useState("");
  const [gradeField, setGradeField] = useState(0);
  const [weightField, setWeightField] = useState(0);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "nameField":
        setNameField(event.target.value);
        break;
      case "gradeField":
        setGradeField(parseInt(event.target.value, 10) || 0);
        break;
      case "weightField":
        setWeightField(parseInt(event.target.value, 10) || 0);
        break;
    }
  };

  const addAssignment = async () => {
    if (
      !nameField ||
      typeof gradeField !== "number" ||
      typeof weightField !== "number"
    )
      return;

    // Get time in seconds to append to the name of the task to
    // generate a *mostly* unique ID for the assignment
    let date = new Date().getTime() / 1000;
    const assignment = {
      id: `${nameField}-${date}`,
      name: nameField,
      grade: gradeField,
      weight: weightField,
      uid: props.user ? props.user.uid : null,
    };

    setNameField("");
    setGradeField(0);
    setWeightField(0);

    if (props.user) await storeDocument(`assignments`, assignment);
    setAssignmentList([...assignmentList, assignment]);
  };

  useEffect(() => {
    async function fetchAssignments() {
      if (!isInitialized()) return;
      if (!isUserSignedIn()) return;
      if (props.user && props.user.uid) {
        setAssignmentList((await getDocuments(`assignments`, { fieldPath: "uid", opStr: "==", value: props.user.uid })) as any);
      }
    };

    fetchAssignments();
  }, [props.user]);

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
              value={gradeField.toString()}
              onChange={changeHandler}
            />
            <InputField
              type="number"
              id="weightField"
              label="Weight"
              value={weightField.toString()}
              onChange={changeHandler}
            />
          </InputFields>
          <Button onClick={addAssignment}>Add assignment</Button>
        </GradeInput>
        <Stats assignments={assignmentList} />
        <AssignmentList assignments={assignmentList} />
      </StyledCalculatorPage>
    </Layout>
  );
};

export default Calculator;
