const Cohort = require("../src/cohort.js");
const Student = require("../src/student.js");
const twilio = require("../src/send_sms.js");

class CohortManager {
  constructor() {
    this.cohortCounter = 0;
    this.studentIDCounter = 0;
    this.students = [];
    this.cohorts = [];
  }

  studentIDGenerator() {
    this.studentIDCounter++;
  }

  cohortNameGenerator() {
    this.cohortCounter++;
    return `Cohort #${this.cohortCounter}`;
  }

  createNewCohort() {
    this.cohorts.push(new Cohort(this.cohortNameGenerator()));
    return this.cohorts;
  }

  createStudent(firstName, lastName, githubUsername, email) {
    this.studentIDGenerator();
    this.students.push(
      new Student(
        this.studentIDCounter,
        firstName,
        lastName,
        githubUsername,
        email
      )
    );
    return this.students;
  }

  addStudentToCohort(studentID, cohortName) {
    const cohort = this.searchCohortByName(cohortName);
    const student = this.searchStudentbyID(studentID);
    if (student === undefined) {
      return "Student not found!";
    }
    if (cohort.isFull() === false) {
      cohort.studentList.push(student);
      twilio(
        `Welcome to Boolean ${student.firstName} ${student.lastName}, you have been added to ${cohort.cohortName}`
      );
      return cohort.studentList;
    }
    return "This cohort is already full!";
  }

  removeStudentFromCohort(studentID, cohortName) {
    const cohort = this.searchCohortByName(cohortName);
    const student = this.searchStudentbyID(studentID);
    if (!student) {
      return "Student not found!";
    }
    cohort.studentList.splice(cohort.studentList.indexOf(student), 1);
    return cohort;
  }

  searchCohortByName(cohortName) {
    const cohortFound = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    );
    if (cohortFound) {
      return cohortFound;
    }
    return "Cohort not found!";
  }

  removeCohortByName(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].cohortName === name) {
        this.cohorts.splice(i, 1);
      }
      return "Cohort not found!";
    }
  }

  searchStudentbyID(studentID) {
    return this.students.find((student) => student.studentID === studentID);
  }

  searchStudentbyName(firstName, lastName) {
    return this.students.find(
      (student) =>
        student.firstName === firstName && student.lastName === lastName
    );
  }

  getAllCohorts() {
    return this.cohorts;
  }

  getAllStudents() {
    return this.students;
  }

  // Method created just for easier test case creation
  createNStudents(num, firstName, lastName, githubUsername, email) {
    for (let i = 0; i < num; i++) {
      this.studentIDGenerator();
      this.students.push(
        new Student(
          this.studentIDCounter,
          firstName,
          lastName,
          githubUsername,
          email
        )
      );
    }
  }
}

module.exports = CohortManager;
