// const Cohort = require("./cohort.js");

class CohortManager {
  constructor() {
    this.cohortClasses = [];
  }

  add(cohortN) {
    console.log("here:", cohortN);
    this.cohortClasses.push(cohortN);
    return this.cohortClasses;
  }


addStudentToCohort (cohortName, student) {
      //   find the cohort with cohortName 
    //   if not found return error
    // if found return cohort.add(student)
    const addNewStudent = this.studentExists(student)
    const cohort = this.findCohort(cohortName)
    if ( cohort && (addNewStudent === false) )  {
        return cohort.add(student)
    } else {
        return false
    }
    
    
}

studentExists (student) {
  for ( let i = 0; i < this.cohortClasses.length; i++) {
    
    console.log('here3:',this.cohortClasses[i])
    if ( this.cohortClasses[i].studentExists(student) ) {
      return true
    }
  }
  return false
}

// the same student can't be in two different cohorts
// check each cohort
// check the each student's full name in cohort
// if present do not add the student ( return false in the addStudentToCohort method)

// noSameStudent(student) {
//   for ( let  i = 0; i < cohortClasses.length; i++) {
//     if (student.fullName !== cohort.students.length[i].fullName) {
//       return true
//     } else return false
//   }
// }

  findCohort(cohortName) {
    //   const cohortError = "cohort not found!"
    for (let i = 0; i < this.cohortClasses.length; i++) {
      if (cohortName === this.cohortClasses[i].cohortName) {
        return this.cohortClasses[i]
      }
    }
    return false
  }

  remove(cohortN) {
    const errorMessage = "cohort not found!";
    for (let i = 0; i < this.cohortClasses.length; i++) {
      if (cohortN === this.cohortClasses[i].cohortName) {
        return this.cohortClasses.splice(i, 1)[0];
        // return this.cohortClasses[i]
      }
    }
    return errorMessage;
  }
}

module.exports = CohortManager;
