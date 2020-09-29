import React from "react";
import styled from "styled-components";

const StyledAssignmentList = styled.div`
`;

const StyledAssignment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-size: 20px;
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
