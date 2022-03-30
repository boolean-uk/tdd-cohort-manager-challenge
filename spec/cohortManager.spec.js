const CohortManager = require("../src/cohortManager.js");
const Cohort = require("../src/cohort.js");
const Student = require("../src/student.js");

describe("cohortManager", () => {
  fit("adds a new cohort is added to the cohort list", () => {
    //   setup
    const cohortManager = new CohortManager();
    const cohort5 = new Cohort(5);
    cohortManager.add(cohort5);

    const expected = [cohort5];
    // evaluate
    const result = cohortManager.cohortList;
    // verify
    expect(result).toEqual(expected);
  });
});
