/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/// ////////////// Global Scope ////////////
const DATA = require('./students.json');
// const STUDENTS = DATA.students;

/// ////////////////////////////////////////

/// ////////////////////////////////////////
class StudentDataProcessor {
  constructor() {
    this.allStudents = DATA.students;
  }

  getAllStudents() {
    return this.allStudents;
  }
}
/// ////////////////////////////////////////

class StudentSelector {
  constructor() {
    this.studentData = new StudentDataProcessor(this);
    this.studentException = new Exception(this);
  }

  // Search for student by student ID - EXT
  findStudentByID(ID) {
    const foundStudent = this.studentData.allStudents.find(
      (student) => student.studentid === ID
    );
    if (!foundStudent) return this.studentException.alertStudentNotFound();
    return foundStudent;
  }
}

/// ////////////////////////////////////////

class CohortManager {
  constructor() {
    this.cohorts = [];
    this.cohortID = 1;
    this.StudentSelectors = new StudentSelector(this);
    this.cohortException = new Exception(this);
  }

  // Create a cohort with a cohort name
  createCohort(cohortName) {
    const cohortObject = {
      ID: this.cohortID,
      name: cohortName,
      status: 'space available',
      capacity: 0,
      cohortStudents: [],
    };
    // Cohorts can't have the same name
    for (let i = 0; i < this.cohorts.length; i++) {
      if (cohortName === this.cohorts[i].name) {
        return this.cohortException.alertCohortSameName();
      }
    }
    // Cohorts can't exist without a name
    if (
      cohortName == null ||
      cohortName.length < 1 ||
      cohortName.trim() === ''
    ) {
      return this.cohortException.alertCohortNoName();
    }
    this.cohorts.push(cohortObject);
    this.cohortID = this.cohortID + 1;
    return cohortObject;
  }

  // Remove a Cohort by cohort name
  removeCohort(cohortName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === cohortName) {
        this.cohorts.splice(i, 1);
      }
    }
    return this.cohorts;
  }

  // Search for cohort by cohort name
  findCohort(cohortName) {
    const findCohort = this.cohorts.find(
      (searchCohortName) => searchCohortName.name === cohortName
    );
    if (!findCohort) {
      return this.cohortException.alertCohortNotFound();
    }
    return findCohort;
  }

  // Add student to a specific cohort
  addStudentToCohort(ID, cohortName) {
    let cohortExists = false;
    let capacityAvailable = false;
    const studentToAdd = this.StudentSelectors.findStudentByID(ID);
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === cohortName) {
        cohortExists = true;
        if (this.cohorts[i].capacity < 24) {
          this.cohorts[i].cohortStudents.push(studentToAdd);
          this.cohorts[i].capacity += 1;
          this.cohorts[i].status = 'space available';
          capacityAvailable = true;
        } else this.cohorts[i].status = 'space is not available';
      }
    }
    return cohortExists === false
      ? this.cohortException.alertCohortDoesNotExist()
      : capacityAvailable === false
      ? this.cohortException.alertCapacityExceeded()
      : this.cohorts;
  }

  // Remove student from a specific cohort
  removeStudentFromCohort(ID, cohortName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === cohortName) {
        this.cohorts[i].cohortStudents = this.cohorts[i].cohortStudents.filter(
          (student) => student.studentid !== ID
        );
      }
      this.cohorts[i].capacity -= 1;
    }
    return this.cohorts;
  }

  // The same student can't exist in multiple cohorts. - EXT
  checkStudentAcrossCohorts() {}

  // Search for students by name (first and last) and return all matching results - EXT
  studentsMatchName(cohortName) {
    let extractStudents = [];
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === cohortName) {
        extractStudents = this.cohorts[i].cohortStudents.filter(
          (students) => students.firstname && students.lastname
        );
      }
    }
    const getStudentNames = extractStudents.map(
      (getName) => getName.firstname + ' ' + getName.lastname
    );
    const duplicateNames = getStudentNames.filter(
      (e, i, a) => a.indexOf(e) !== i
    );
    return duplicateNames;
  }
}

/// ////////////////////////////////////////

class Exception {
  // Return error if student not found
  alertStudentNotFound() {
    const message = 'student not found';
    return message;
  }

  // Return error if cohort not found
  alertCohortNotFound() {
    const message = 'cohort not found';
    return message;
  }

  // Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit. - EXT
  alertCapacityExceeded() {
    const message = 'capacity is 24 students only';
    return message;
  }

  alertCohortDoesNotExist() {
    const message = 'this cohort does not exist';
    return message;
  }

  // Cohorts can't exist without a name
  alertCohortNoName() {
    const message = 'all cohorts must have a name';
    return message;
  }

  // Cohorts can't have the same name
  alertCohortSameName() {
    const message = 'this name is already taken by another cohort';
    return message;
  }

  // A student can't be removed from a cohort if it wasn't present in the first place. - EXT
}

const testCM = new CohortManager();

testCM.createCohort('cohort1');

module.exports = { CohortManager, StudentSelector, Exception };
