import React from "react";
import styled from "styled-components";

const StyledAssignmentList = styled.div`
  h1 {
    font-size: 36px;
  }
`;

type Assignment = {
  id: number;
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
      <h1>Assignment List</h1>
      {props.assignments.map((assignment) => (
        <div>
          <p>{assignment.name}</p>
          <p>{assignment.grade}</p>
          <p>{assignment.weight}</p>
        </div>
      ))}
    </StyledAssignmentList>
  );
};

export default AssignmentList;
