type Assignment = {
  id: string;
  name: string;
  grade: number;
  weight: number;
};

type StatType = {
  average: number;
  totalWeight: number;
  highestPossible: number;
  lowestPossible: number;
};

export const getStats = (assignments: Assignment[]): StatType => {
  let gradeSum = 0;
  let totalWeight = 0;

  assignments.forEach((assignment) => {
    gradeSum += assignment.grade * assignment.weight;
    totalWeight += assignment.weight;
  });

  gradeSum /= 100;
  totalWeight /= 100;

  let average = gradeSum / totalWeight;
  let highestPossible =
    ((average * totalWeight) / 100 + (1 - totalWeight)) * 100;
  let lowestPossible = average * totalWeight;
  return {
    average,
    totalWeight: totalWeight * 100,
    highestPossible,
    lowestPossible,
  };
};
