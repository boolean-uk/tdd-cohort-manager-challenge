class Student {
    constructor(studentID, firstName, lastName, githubUsername, email) {
      this.studentID = studentID;
      this.firstName = firstName;
      this.lastName = lastName;
      this.githubUsername = githubUsername;
      this.email = email;
    }
  }
  
  class Cohort {
    constructor(name) {
      this.name = name;
      this.students = [];
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  
    removeStudent(studentID) {
      const index = this.students.findIndex(
        (student) => student.studentID === studentID
      );
      if (index !== -1) {
        this.students.splice(index, 1);
      } else {
        throw new Error(
          `Student with ID ${studentID} not found in cohort ${this.name}`
        );
      }
    }
  }
  
  class CohortManager {
    constructor() {
      this.cohorts = [];
    }
  
    createCohort(name) {
      const cohort = new Cohort(name);
      this.cohorts.push(cohort);
      return cohort;
    }
  
    searchCohort(name) {
      const cohort = this.cohorts.find((cohort) => cohort.name === name);
      if (cohort) {
        return cohort;
      } else {
        throw new Error(`Cohort with name ${name} not found`);
      }
    }
  
    addStudentToCohort(cohortName, student) {
      const cohort = this.searchCohort(cohortName);
      cohort.addStudent(student);
    }
  
    removeCohort(name) {
      const index = this.cohorts.findIndex((cohort) => cohort.name === name);
      if (index !== -1) {
        this.cohorts.splice(index, 1);
      } else {
        throw new Error(`Cohort with name ${name} not found`);
      }
    }
  
    removeStudentFromCohort(cohortName, studentID) {
      const cohort = this.searchCohort(cohortName);
      cohort.removeStudent(studentID);
    }
  }
  
  module.exports = CohortManager;