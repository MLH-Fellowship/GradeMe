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
    const { curGrade, totalWeight } = getStats(props.assignments);
    setAvgGrade(curGrade);
    setWeight(totalWeight);
  }, [props.assignments]);

  return (
    <StyledStats>
      <h2>Stats</h2>
      <StatRow>
        <StyledStat>
          <h3>Average Grade</h3>
          <p>{avgGrade}%</p>
        </StyledStat>
      </StatRow>
      <StatRow>
        <StyledStat>
          <h3>Combined Weight</h3>
          <p>{weight}%</p>
        </StyledStat>
      </StatRow>
    </StyledStats>
  );
};

export default Stats;
