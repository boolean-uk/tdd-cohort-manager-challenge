const CohortManager = require("../src/CohortManager.js");
const Cohort = require("../src/cohort.js");
const Student = require("../src/student.js");

describe("Cohort Manager", () => {
  it("Add a single Cohort", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort1");
    // const cohort1 = cohort1
    // execute
    const addedCohort = cohortManager.add(cohort1);
    console.log();
    // verify
    expect(addedCohort).toEqual(cohortManager.cohortClasses);
  });

  it("Remove a single Cohort", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort1");
    const cohort2 = new Cohort("Cohort2");
    // execute
    cohortManager.add(cohort1);
    const addedCohort2 = cohortManager.add(cohort2);

    const result1 = cohortManager.remove(cohort1.cohortName);
    const emptyArray = [cohort2];
    // verify
    expect(addedCohort2).toEqual(emptyArray);
    expect(result1).toEqual(cohort1);
  });

  it("When the cohort removed isn't found return error message", () => {
    // setup
    const cohortManager = new CohortManager();
    const cohort1 = new Cohort("Cohort1");
    const cohort2 = new Cohort("Cohort2");
    // execute
    const result1 = cohortManager.remove(cohort1.cohortName);
    addedCohort2 = cohortManager.add(cohort2);
    const emptyArray = [cohort2];
    // verify
    expect(addedCohort2).toEqual(emptyArray);
    expect(result1).toEqual("cohort not found!");
  });

  it("add students into cohort", () => {
    // setup
    const cohort1 = new Cohort("Cohort1");
    const cohortManager = new CohortManager();

    const student = new Student(1, "Student One", "email@email.com");
    const student2 = new Student(2, "Student Two", "email2@email.com");
    // execute
    const addedStudent = cohort1.add(student);
    cohort1.add(student2);
    studentsInCohort = [student, student2];
    addedCohort = cohortManager.add(cohort1);
    const emptyArray = [cohort1];
    // console.log(studentsInCohort)
    // verify
    expect(addedStudent).toEqual(studentsInCohort);
    expect(addedCohort).toEqual(emptyArray);
  });

  it("add students into different cohort", () => {
    // setup
    const cohort1 = new Cohort("Cohort1");
    const cohort2 = new Cohort("Cohort2");
    const cohortManager = new CohortManager();

    const student = new Student(1, "Student One", "email@email.com");
    const student2 = new Student(2, "Student Two", "email2@email.com");
    // execute
    const addedStudent1 = cohort1.add(student);
    const addedStudent2 = cohort2.add(student2);

    studentsInCohort1 = [student];
    studentsInCohort2 = [student2];

    addedCohort1 = cohortManager.add(cohort1);
    addedCohort2 = cohortManager.add(cohort2);

    const emptyArray = [cohort1, cohort2];
    // console.log(studentsInCohort)
    // verify
    expect(addedStudent1).toEqual(studentsInCohort1);
    expect(addedStudent2).toEqual(studentsInCohort2);
    expect(addedCohort1).toEqual(emptyArray);
    expect(addedCohort2).toEqual(emptyArray);
  });

  it("add students into different cohort", () => {
    // setup
    // const cohort1 = new Cohort("Cohort1");
    const cohortManager = new CohortManager();

    const student = new Student(1, "Student One", "email@email.com");
    // execute
    const addedCohort1 = cohortManager.add('Cohort1')
    cohortManager.addStudentToCohort('Cohort1',student);
    const emptyArray = cohortManager.cohortClasses
    // verify
    expect(addedCohort1).toEqual(emptyArray)
    // expect(addStudentToCohort1).toEqual(cohortManager.addStudentToCohort)
    // expect(addedStudent1).toEqual()
  });

});
