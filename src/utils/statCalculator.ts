type Assignment = {
  id: string;
  name: string;
  grade: number;
  weight: number;
};

type StatType = {
  curGrade: number;
  totalWeight: number;
}

export const getStats = (assignments: Assignment[]): StatType => {
  let curGrade = 0;
  let weight = 0;

  assignments.forEach((assignment) => {
    curGrade += (assignment.grade) * (assignment.weight);
    weight += assignment.weight;
  })

  return {
    curGrade: curGrade / 100,
    totalWeight: weight,
  }
}