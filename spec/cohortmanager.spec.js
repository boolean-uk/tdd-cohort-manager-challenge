const CohortManager = require("../src/cohortmanager.js");
const Cohort = require("../src/cohort.js");
const student = require("../src/student.js");
const Student = require("../src/student.js");

describe("Cohort manager", () => {
  it("can create a cohort and add it to the cohort array", () => {
    // setup
    const cohortManager = new CohortManager();
    // execute
    const result = cohortManager.createNewCohort("Cohort 1");
    // verify
    expect(result).toEqual(`New Cohort (Cohort 1) created.`);
    expect(cohortManager.cohortList.length).toEqual(1);
    expect(cohortManager.cohortList[0].name).toEqual("Cohort 1");
  });

  it("can search for a cohort by cohort name and return the searched cohort", () => {
    // setup
    const cohortManager = new CohortManager();
    cohortManager.createNewCohort("Cohort 1");
    cohortManager.createNewCohort("Cohort 2");
    // execute
    const result = cohortManager.searchByCohortName("Cohort 2");
    const expected = cohortManager.cohortList[1];
    // verify
    expect(result).toEqual(expected);
  });

  it("can remove a cohort and returns cohort list or error", () => {
    // setup
    const cohortManager = new CohortManager();
    cohortManager.createNewCohort("Cohort 1");
    cohortManager.createNewCohort("Cohort 2");
    // execute
    cohortManager.removeCohort("Cohort 1");
    const errorTest = cohortManager.removeCohort("Cohort 3");
    // verify
    expect(cohortManager.cohortList[0].name).toEqual("Cohort 2");
    expect(cohortManager.cohortList.length).toEqual(1);

    expect(errorTest).toEqual("cant remove - cohort doesnt exist");
  });

  // returns error if cohort doesnt exist, retruns error if student already exists
  it("adds a student to cohort 1 and returns the cohort they were added to", () => {
    // setup
    const cohortManager = new CohortManager();
    const morty = new Student(
      "Morty",
      "Smith",
      "mortysmith001",
      "mortysmith@gmail.com"
    );

    cohortManager.createNewCohort("Cohort 1");
    // execute

    // verify
    const result = cohortManager.addStudentToCohort(morty, "Cohort 1");
    const errorTest1 = cohortManager.addStudentToCohort(morty, "Cohort 1");
    const errorTest2 = cohortManager.addStudentToCohort(morty, "Cohort 2");

    expect(result.studentList).toEqual([morty]);
    expect(errorTest1).toEqual(`Student already exists`);
    expect(errorTest2).toEqual(`cohort doesnt exist`);
  });

  it("removes a student from cohort 1 and returns ", () => {
    // setup
    const cohortManager = new CohortManager();
    const morty = new Student(
      "Morty",
      "Smith",
      "mortysmith001",
      "mortysmith@gmail.com"
    );
    const rick = new Student(
      "Rick",
      "Sanchez",
      "ricksanchez001",
      "ricksanchezgmail.com"
    );

    cohortManager.createNewCohort("Cohort 1");
    cohortManager.addStudentToCohort(morty, "Cohort 1");
    cohortManager.addStudentToCohort(rick, "Cohort 1");
    // execute
    const result = cohortManager.removeStudentFromCohort(
      "mortysmith@gmail.com",
      "Cohort 1"
    );
    const errorTest1 = cohortManager.removeStudentFromCohort(
      "jerrysmith@gmail.com",
      "Cohort 1"
    );
    const errorTest2 = cohortManager.removeStudentFromCohort(
      "mortysmith@gmail.com",
      "Cohort 3"
    );
    // verify
    expect(result.studentList).toEqual([rick]);
    expect(errorTest1).toEqual(`Student doesnt exist`);
    expect(errorTest2).toEqual(`cohort doesnt exist`);
  });

  // it("can add a cohort", () => {
  //   // setup
  //   const cohortManager = new CohortManager();
  //   const cohort = new Cohort("Cohort 1");
  //   // execute
  //   cohortManager.addNewCohort(cohort);
  //   // verify
  //   expect(cohortManager.cohortList).toEqual([cohort]);
  //   expect(cohortManager.cohortList.length).toEqual(1);
  // });

  // it("removes  student2 from cohort 1", () => {
  //   // setup
  //   const cohortManager = new CohortManager();
  //   const cohort1 = new Cohort("Cohort 1");
  //   const student1 = new Student(
  //     "1",
  //     "John",
  //     "Smith",
  //     "johnsmith001",
  //     "johnsmith@gmail.com"
  //   );
  //   const student2 = new Student(
  //     "2",
  //     "Kevin",
  //     "Smith",
  //     "kevinsmith001",
  //     "kevinsmith@gmail.com"
  //   );
  //   // execute
  //   cohortManager.addNewCohort(cohort1);
  //   cohortManager.addStudentToCohort(student1, "Cohort 1");
  //   cohortManager.addStudentToCohort(student2, "Cohort 1");

  //   // verify
  //   const result = cohortManager.removeStudentFromCohort(student2, "Cohort 1");

  //   expect(result.studentList).toEqual([student1]);
  // });

  // it("Checks a student exists - returns false when searching for student2", () => {
  //   // setup
  //   const cohortManager = new CohortManager();
  //   const cohort1 = new Cohort("Cohort 1");
  //   const student1 = new Student(
  //     "1",
  //     "John",
  //     "Smith",
  //     "johnsmith001",
  //     "johnsmith@gmail.com"
  //   );
  //   const student2 = new Student(
  //     "2",
  //     "Kevin",
  //     "Smith",
  //     "kevinsmith001",
  //     "kevinsmith@gmail.com"
  //   );
  //   // execute
  //   cohortManager.addNewCohort(cohort1);
  //   cohortManager.addStudentToCohort(student1, "Cohort 1");

  //   // verify
  //   const result = cohortManager.studentExists(student2, cohort1.studentList);

  //   expect(result).toEqual(false);
  // });

  // it("Checks a cohort exists - returns false when searching for cohort2", () => {
  //   // setup
  //   const cohortManager = new CohortManager();
  //   const cohort1 = new Cohort("Cohort 1");
  //   const cohort2 = new Cohort("Cohort 2");

  //   // execute
  //   cohortManager.addNewCohort(cohort1);

  //   // verify
  //   const result = cohortManager.cohortExists(cohort2);

  //   expect(result).toEqual(false);
  // });
});
