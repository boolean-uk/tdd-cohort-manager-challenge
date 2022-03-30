const CohortManager = require("../src/cohortManager.js");
const Cohort = require("../src/cohort.js");

describe("cohortManager", () => {
  it("adds a new cohort is added to the cohort list", () => {
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

  it("searches a specific cohort", () => {
    //   setup
    const cohortManager = new CohortManager();
    const cohort3 = new Cohort(3);
    const cohort4 = new Cohort(4);
    const cohort5 = new Cohort(5);

    cohortManager.add(cohort3);
    cohortManager.add(cohort4);
    cohortManager.add(cohort5);

    const expected = cohort5;
    // evaluate
    const result = cohortManager.search("Cohort 5");
    // verify
    expect(result).toEqual(expected);
  });

  fit("returns a error for searching a non-existant cohort", () => {
    //   setup
    const cohortManager = new CohortManager();
    const cohort3 = new Cohort(3);
    const cohort4 = new Cohort(4);
    const cohort5 = new Cohort(5);

    cohortManager.add(cohort3);
    cohortManager.add(cohort4);
    cohortManager.add(cohort5);

    const expected = "ERROR – this cohort do not exist";
    // evaluate
    const result = cohortManager.search("Cohort 6");
    // verify
    expect(result).toEqual(expected);
  });
});
