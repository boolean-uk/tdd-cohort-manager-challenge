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

  it("returns a error for searching a non-existant cohort", () => {
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

  it("removes specific cohort and returns the cohort list", () => {
    //   setup
    const cohortManager = new CohortManager();
    const cohort3 = new Cohort(3);
    const cohort4 = new Cohort(4);
    const cohort5 = new Cohort(5);

    cohortManager.add(cohort3);
    cohortManager.add(cohort4);
    cohortManager.add(cohort5);

    const expected = [cohort3, cohort5];
    // evaluate
    const result = cohortManager.remove("Cohort 4");
    // verify
    expect(result).toEqual(expected);
  });

  it("returns an error for trying to remove a non-existing cohort", () => {
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
    const result = cohortManager.remove("Cohort 6");
    // verify
    expect(result).toEqual(expected);
  });
});
