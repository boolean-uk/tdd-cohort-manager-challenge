const CohortManager = require("../src/cohortmanager.js");
const Cohort = require("../src/cohort.js");
const student = require("../src/student.js");
const Student = require("../src/student.js");

describe("Cohort manager", () => {
  it("can add a cohort", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort = new Cohort("Cohort 1");
    // execute
    cohortManager.addNewCohort(cohort);
    // verify
    expect(cohortManager.cohortList).toEqual([cohort]);
    expect(cohortManager.cohortList.length).toEqual(1);
  });

  it("can search for a cohort by cohort name", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort 1");
    const cohort2 = new Cohort("Cohort 2");
    // execute
    cohortManager.addNewCohort(cohort1);
    cohortManager.addNewCohort(cohort2);

    // verify
    expect(cohortManager.searchByCohortName("Cohort 1")).toEqual(cohort1);
  });

  it("adds a student to cohort 1", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort 1");
    const cohort2 = new Cohort("Cohort 2");
    const newStudent = new Student(
      "1",
      "John",
      "Smith",
      "johnsmith001",
      "johnsmith@gmail.com"
    );
    // execute
    cohortManager.addNewCohort(cohort1);
    cohortManager.addNewCohort(cohort2);

    // verify
    const result = cohortManager.addStudentToCohort(newStudent, "Cohort 1");

    expect(result.name).toEqual("Cohort 1");
    expect(result.studentList).toEqual([newStudent]);
  });

  it("removes  student2 from cohort 1", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort 1");
    const student1 = new Student(
      "1",
      "John",
      "Smith",
      "johnsmith001",
      "johnsmith@gmail.com"
    );
    const student2 = new Student(
      "2",
      "Kevin",
      "Smith",
      "kevinsmith001",
      "kevinsmith@gmail.com"
    );
    // execute
    cohortManager.addNewCohort(cohort1);
    cohortManager.addStudentToCohort(student1, "Cohort 1");
    cohortManager.addStudentToCohort(student2, "Cohort 1");

    // verify
    const result = cohortManager.removeStudentFromCohort(student2, "Cohort 1");

    expect(result.studentList).toEqual([student1]);
  });

  it("can remove a cohort", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort 1");
    const cohort2 = new Cohort("Cohort 2");
    // execute
    cohortManager.addNewCohort(cohort1);
    cohortManager.addNewCohort(cohort2);
    cohortManager.removeCohort(cohort1);
    // verify
    expect(cohortManager.cohortList).toEqual([cohort2]);
    expect(cohortManager.cohortList.length).toEqual(1);
  });

  it("Checks a student exists - returns false when searching for student2", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort 1");
    const student1 = new Student(
      "1",
      "John",
      "Smith",
      "johnsmith001",
      "johnsmith@gmail.com"
    );
    const student2 = new Student(
      "2",
      "Kevin",
      "Smith",
      "kevinsmith001",
      "kevinsmith@gmail.com"
    );
    // execute
    cohortManager.addNewCohort(cohort1);
    cohortManager.addStudentToCohort(student1, "Cohort 1");

    // verify
    const result = cohortManager.studentExists(student2, cohort1.studentList);

    expect(result).toEqual(false);
  });

  it("Checks a cohort exists - returns false when searching for cohort2", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort 1");
    const cohort2 = new Cohort("Cohort 2");

    // execute
    cohortManager.addNewCohort(cohort1);

    // verify
    const result = cohortManager.cohortExists(cohort2);

    expect(result).toEqual(false);
  });
});
