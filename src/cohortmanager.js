///////////////// Global Scope ////////////
const DATA = require('./students.json');
const STUDENTS = DATA.students;

///////////////////////////////////////////

///////////////////////////////////////////
class StudentDataProcessor {
  constructor() {
    this.allStudents = DATA.students;
  }
  getAllStudents() {
    return this.allStudents;
  }
}
///////////////////////////////////////////

class StudentSelector {
  constructor() {
    this.studentData = new StudentDataProcessor(this);
    this.studentException = new Exception(this);
  }

  //Search for student by student ID - EXT
  findStudentByID(ID) {
    const foundStudent = this.studentData.allStudents.find(
      (student) => student.studentid === ID
    );
    if (!foundStudent) return this.studentException.alertStudentNotFound();
    return foundStudent;
  }
}

///////////////////////////////////////////

class CohortManager {
  constructor() {
    this.COHORTS = [];
    this.cohortID = 1;
    this.StudentSelectors = new StudentSelector(this);
    this.cohortException = new Exception(this);
  }

  // Create a cohort with a cohort name
  createCohort(cohortName) {
    let cohortObject = {
      ID: this.cohortID,
      name: cohortName,
      status: 'space available',
      cohortStudents: [],
    };
    this.COHORTS.push(cohortObject);
    this.cohortID = this.cohortID + 1;
    return cohortObject;
  }

  //Remove a Cohort by cohort name
  removeCohort(cohortName) {
    for (let i = 0; i < this.COHORTS.length; i++) {
      if (this.COHORTS[i].name === cohortName) {
        // delete this.COHORTS[i];
        this.COHORTS.splice(i, 1);
      }
    }
    return this.COHORTS;
  }

  //Search for cohort by cohort name
  findCohort(cohortName) {
    const findCohort = this.COHORTS.find(
      (searchCohortName) => searchCohortName.name === cohortName
    );
    if (!findCohort) {
      return this.cohortException.alertCohortNotFound();
    }
    return findCohort;
  }

  // Add student to a specific cohort
  addStudentToCohort(ID, cohortName) {
    let studentToAdd = this.StudentSelectors.findStudentByID(ID);
    for (let i = 0; i < this.COHORTS.length; i++) {
      if (this.COHORTS[i].name == cohortName)
        this.COHORTS[i].cohortStudents.push(studentToAdd);
    }
    return this.COHORTS;
  }

  //Remove student from a specific cohort
  removeStudentFromCohort(ID, cohortName) {
    for (let i = 0; i < this.COHORTS.length; i++) {
      if (this.COHORTS[i].name == cohortName)
        this.COHORTS[i].cohortStudents = this.COHORTS[i].cohortStudents.filter(
          (student) => student.studentid !== ID
        );
    }
    return this.COHORTS;
  }

  //Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit. - EXT
  checkCohortCapacity() {}

  //Cohorts can't have the same name, and can't exist without a name - EXT
  checkCohortName() {}

  //The same student can't exist in multiple cohorts. - EXT
  checkStudentAcrossCohorts() {}

  //A student can't be removed from a cohort if it wasn't present in the first place. - EXT

  //Search for students by name (first and last) and return all matching results - EXT
  findStudentsMatchingFullname() {}
}
///////////////////////////////////////////

class Exception {
  constructor() {}
  //Return error if student not found
  alertStudentNotFound() {
    const message = 'student not found';
    return message;
  }

  //Return error if cohort not found
  alertCohortNotFound() {
    const message = 'cohort not found';
    return message;
  }
}

module.exports = { CohortManager, StudentSelector, Exception };
