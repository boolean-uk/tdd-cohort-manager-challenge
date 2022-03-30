const Manager = require("../src/manager.js");
const Cohort = require("../src/cohort.js");
const Student = require("../src/student.js");

describe("Manager", () => {
  it("create a cohort name", () => {
    //set up
    const expected = [];
    const manager = new Manager();
    const cohort = new Cohort("Cohort 1");
    const cohort2 = new Cohort("Cohort 2");
    const cohort3 = new Cohort("Cohort 3");
    //execute
    const result = manager.createCohortName("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });
});
