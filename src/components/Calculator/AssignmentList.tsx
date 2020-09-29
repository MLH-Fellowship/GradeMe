import React from "react";
import styled from "styled-components";

const StyledAssignmentList = styled.div`
`;

const AssignmentTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const StyledAssignment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  p {
    font-size: 20px;
    margin: 0;
  }
`;

type Assignment = {
  id: string;
  name: string;
  grade: number;
  weight: number;
};

type AssignmentListProps = {
  assignments: Assignment[];
};

// TODO: Styling
// TODO: Remove/edit assignments?
const AssignmentList = (props: AssignmentListProps) => {
  return (
    <StyledAssignmentList>
      <h2>Assignment List</h2>
      <AssignmentTable>
        <h3>Assignment Name</h3>
        <h3>Grade</h3>
        <h3>Weight</h3>
      </AssignmentTable>
      {props.assignments.map((assignment) => (
          <StyledAssignment key={assignment.id}>
            <p>{assignment.name}</p>
            <p>{assignment.grade}</p>
            <p>{assignment.weight}</p>
          </StyledAssignment>
        ))}
    </StyledAssignmentList>
  );
};

export default AssignmentList;
