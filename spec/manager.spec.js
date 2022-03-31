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
    const manager = new Manager("Cohort 1");
    //execute
    const expected = [
      {
        name: "Cohort 1",
      },
    ];
    const result = manager.searchCohortName("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });
});
