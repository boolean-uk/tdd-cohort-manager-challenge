///////////////// Global Scope ////////////
const DATA = require('./students.json');
const STUDENTS = DATA.students;
// console.log(STUDENTS[0].studentid);
// console.log(STUDENTS[0].username);
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
    this.sutdentException = new Exception(this);
  }
  getStudentbyIndex(indexPos) {
    let selectedStudent = this.studentData.allStudents[indexPos];
    return selectedStudent;
  }

  //Search for student by student ID - EXT
  findStudentByID(ID) {
    const foundStudent = this.studentData.allStudents.find(
      (student) => student.studentid === ID
    );
    if (!foundStudent) return this.sutdentException.alertStudentNotFound();
    return foundStudent;
  }

  // "students": [
  //   {
  //     "studentid": 1,

  //   },
}

///////////////////////////////////////////

class CohortManager {
  constructor() {
    this.COHORTS = [];
    this.cohortID = 1;
    this.StudentSelectors = new StudentSelector(this);
    this.cohortException = new Exception(this);
  }

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
  addStudentToCohort(selectedStudentIndex, cohortName) {
    let studentToAdd =
      this.StudentSelectors.getStudentbyIndex(selectedStudentIndex);
    for (let i = 0; i < this.COHORTS.length; i++) {
      if (this.COHORTS[i].name == cohortName)
        this.COHORTS[i].cohortStudents.push(studentToAdd);
    }
    return this.COHORTS;
  }

  //Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit. - EXT
  checkCohortCapacity() {}

  //Cohorts can't have the same name, and can't exist without a name - EXT
  checkCohortName() {}

  //Add student to a specific cohort
  AddStudentToCohort() {}

  //Remove student from a specific cohort
  RemoveStudentFromCohort() {}

  //The same student can't exist in multiple cohorts. - EXT
  checkStudentAcrossCohorts() {}

  //A student can't be removed from a cohort if it wasn't present in the first place. - EXT
  NotSureWhatToCallThisMethodYet() {}

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

//Notes

// write here

// student selector instances-----
let studenttest = new StudentSelector();

console.log(studenttest.findStudentByID(2));
// cohorot management instances-----

let cohortmanagement = new CohortManager();
cohortmanagement.findCohort('cohort1');

// console.log('Adding First \n');
// console.log(cohortmanagement.createCohort('cohort1'));
// console.log('Adding Second \n');
// console.log(cohortmanagement.createCohort('cohort2'));

// console.log('now deleting');
// let out = cohortmanagement.removeCohort('cohort1');
// console.log('after deleting');

// console.log(out);

// cohortmanagement.findCohortByName('cohort1').name;
// cohortmanagement.findCohortByName('cohort2');

// cohort1.name;

// console.log(cohortmanagement.addStudentToCohort(2, 'cohort1'));

module.exports = { CohortManager, StudentSelector, Exception };
