const CohortManager = require("../../src/cohortManger");

describe("cohortManager", () => {
  let cohortManager;

  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  it("Create a cohort with a cohort name ", () => {
    cohortManager.createCohort("Robin");

    expect(cohortManager.cohortsArr.length).toEqual(1);
  });
  it("find a cohort by its cohort name ", () => {
    // set up
    const expectedResult = { cohortName: "Robin", students: [] };
    cohortManager.createCohort("Flemingo");
    cohortManager.createCohort("Hawk");
    cohortManager.createCohort("Robin");
    // execute
    const result = cohortManager.searchCohortByName("Robin");
    //verify
    expect(result).toEqual(expectedResult);
  });

  it("add student to specific cohort", function () {
    //set up
    const student = { firstName: "Kelly" };
    cohortManager.createCohort("Robin");
    //execute
    cohortManager.addStudentToCohort("Robin", student);
    // verify
    const cohort = cohortManager.searchCohortByName("Robin");
    expect(cohort.students.length).toEqual(1);
  });

  it("remove a cohort by cohort name", function () {
    //set up
    const cohort = [];

    //execute
    cohortManager.createCohort("Flemingo");
    // verify
    const result = cohortManager.removeCohortByName("Flemingo");
    expect(result).toEqual(cohort);
  });

  it("remove a student from a specific cohort", function () {
    //set up
    cohortManager.createCohort("Hawk");
    const peter = {
      ID: 1,
      firstName: "Peter",
      lastName: "Osbourne",
      gutHubAccount: "P.Osb",
      email: "peter@gmail.com",
    };

    const laura = {
      ID: 2,
      firstName: "Laura",
      lastName: "Web",
      gutHubAccount: "L.Web",
      email: "Laura@gmail.com",
    };
    cohortManager.addStudentToCohort("Hawk", laura);
    cohortManager.addStudentToCohort("Hawk", peter);

    //execute

    const cohort = cohortManager.removeStudentByCohort("Hawk", laura);
    // verify
    expect(cohort.students.length).toEqual(1);
  });
  it("return error if cohort not found", function () {
    //set up
    const student = { firstName: "Kelly" };
    cohortManager.createCohort("Robin");
    //execute
    const message = cohortManager.addStudentToCohort("Flemingo", student);
    // verify
    expect(message).toEqual("Error, cohort not found");
  });
  it("return error if cohort not found", function () {
    //set up
    const student = { firstName: "Kelly" };
    cohortManager.createCohort("Robin");
    //execute
    const message = cohortManager.searchCohortByName("Flemingo", student);
    // verify
    expect(message).toEqual("Error, cohort not found");
  });

  it("return error if cohort not found", function () {
    //set up

    cohortManager.createCohort("Robin");
    //execute
    const message = cohortManager.removeCohortByName("Penguin");
    // verify
    expect(message).toEqual("Error, cohort not found");
  });

  it("return error if student is not found", function () {
    //set up
    cohortManager.createCohort("Robin");
    const student = { firstName: "Kelly" };
    //execute
    const message = cohortManager.removeCohortByName("Dove", student);
    // verify
    expect(message).toEqual("Error, cohort not found");
  });
});
