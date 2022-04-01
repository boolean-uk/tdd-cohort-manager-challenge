const Manager = require("../src/manager.js");
const Cohort = require("../src/cohort.js");
const Student = require("../src/student.js");

describe("Manager", () => {
  it("create a cohort name", () => {
    //set up
    const manager = new Manager();
    const expected = [
      {
        name: "Cohort 1",
        studentList: [],
      },
    ];
    //execute
    const result = manager.createCohortName("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });

  it("search a cohort name", () => {
    //set up
    const manager = new Manager();
    manager.createCohortName("Cohort 1");
    manager.createCohortName("Cohort 2");
    //execute
    const expected = [
      {
        name: "Cohort 1",
        studentList: [],
      },
    ];
    const result = manager.searchCohortName("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });

  it("remove a cohort name", () => {
    //set up
    const manager = new Manager();
    manager.createCohortName("Cohort 1");
    manager.createCohortName("Cohort 2");
    manager.searchCohortName("Cohort 1");
    //execute
    const expected = [
      {
        name: "Cohort 1",
        studentList: [],
      },
      {
        name: "Cohort 2",
        studentList: [],
      },
    ];
    const result = manager.removeCohortName("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });
});
