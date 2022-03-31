const CohortManager = require("../src/cohortmanager.js");
const Cohort = require("../src/cohort.js");
const student = require("../src/student.js");
const Student = require("../src/student.js");

describe("Cohort manager", () => {
  it("searches by student id and returns error message if not found ", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort 1");
    const cohort2 = new Cohort("Cohort 2");
    const student1 = new Student(
      1,
      "John",
      "Smith",
      "johnsmith001",
      "johnsmith@gmail.com"
    );
    const student2 = new Student(
      2,
      "Kevin",
      "Smith",
      "kevinsmith001",
      "kevinsmith@gmail.com"
    );
    // execute
    cohortManager.addNewCohort(cohort1);
    cohortManager.addNewCohort(cohort2);
    cohortManager.addStudentToCohort(student1, "Cohort 1");
    cohortManager.addStudentToCohort(student2, "Cohort 2");

    // verify
    const result1 = cohortManager.searchByStudentID(2);
    const result2 = cohortManager.searchByStudentID(3);

    expect(result1).toEqual(student2);
    expect(result2).toEqual(`student not found`);
  });

  it("can't exceed student capacity ", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort 1");

    const student1 = new Student(
      1,
      "John",
      "Smith",
      "johnsmith001",
      "johnsmith@gmail.com"
    );
    // execute
    cohortManager.addNewCohort(cohort1);
    cohortManager.addNewCohort(cohort2);
    cohortManager.addStudentToCohort(student1, "Cohort 1");
    cohortManager.addStudentToCohort(student2, "Cohort 2");

    // verify
    const result = cohortManager.searchByStudentID(2);

    expect(result).toEqual(student2); // and cohort2?
  });
});
