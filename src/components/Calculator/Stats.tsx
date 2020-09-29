import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getStats } from "../../utils/statCalculator";

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem 4rem 0;
`;

const StatRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const StatCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const StyledStat = styled.div`
  margin-right: 2rem;

  h3 {
    font-size: 20px;
    font-weight: 300;
    margin: 0;
  }

  p {
    font-size: 30px;
    font-weight: 900;
    margin: 0;
  }
`;

type Assignment = {
  id: string;
  name: string;
  grade: number;
  weight: number;
};

type StatProps = {
  assignments: Assignment[];
};

const Stats = (props: StatProps) => {
  const [avgGrade, setAvgGrade] = useState(0);
  const [highGrade, setHighGrade] = useState(0);
  const [weight, setWeight] = useState(0);
  const [lowGrade, setLowGrade] = useState(0);

  useEffect(() => {
    const { average, totalWeight, highestPossible, lowestPossible } = getStats(
      props.assignments
    );
    setAvgGrade(average);
    setWeight(totalWeight);
    setHighGrade(highestPossible);
    setLowGrade(lowestPossible);
  }, [props.assignments]);

  const nanGuard = (grade: number) => {
    return isNaN(grade) ? 0 : grade;
  };

  return (
    <StyledStats>
      <h2>Stats</h2>
      <StatRow>
        <StatCol>
          <StyledStat>
            <h3>Average Grade</h3>
            <p>{nanGuard(avgGrade)}%</p>
          </StyledStat>
          <StyledStat>
            <h3>Combined Weight</h3>
            <p>{nanGuard(weight)}%</p>
          </StyledStat>
        </StatCol>
        <StatCol>
          <StyledStat>
            <h3>Highest Possible Grade</h3>
            <p>{nanGuard(highGrade)}%</p>
          </StyledStat>
          <StyledStat>
            <h3>Lowest Possible Grade</h3>
            <p>{nanGuard(lowGrade)}%</p>
          </StyledStat>
        </StatCol>
      </StatRow>
    </StyledStats>
  );
};

export default Stats;
