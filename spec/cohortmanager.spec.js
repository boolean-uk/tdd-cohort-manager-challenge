const CohortManager = require("../src/cohortmanager.js");
const Cohort = require("../src/cohort.js");
const student = require("../src/student.js");

describe("Cohort manager", () => {
  it("can add a cohort", () => {
    // setup
    const cohortManager = new CohortManager();
    const newCohort = new Cohort("Cohort 1");
    // execute
    cohortManager.addNewCohort(newCohort);
    // verify
    expect(cohortManager.cohortList).toEqual([newCohort]);
    expect(cohortManager.cohortList.length).toEqual(1);
  });

  it("can search for a cohort by cohort name", () => {
    // setup
    const cohortManager = new CohortManager();
    const newCohort1 = new Cohort("Cohort 1");
    const newCohort2 = new Cohort("Cohort 2");
    // execute
    cohortManager.addNewCohort(newCohort1);
    cohortManager.addNewCohort(newCohort2);

    // verify
    expect(cohortManager.searchByCohortName("Cohort 1")).toEqual(newCohort1);
  });
});
