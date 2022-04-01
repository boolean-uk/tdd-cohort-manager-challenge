// const Cohort = require("../src/cohort.js");

class CohortManager {
  constructor() {
    this.cohortClasses = [];
  }

  add(cohortN) {
    console.log("here:", cohortN);
    this.cohortClasses.push(cohortN);
    return this.cohortClasses;
  }

//   add(cohortN) {
//     console.log("here:", cohortN);
//     for (let i = 0; i < this.cohortClasses.length; i++) {
//       if (cohortN !== this.cohortClasses[i].cohort.cohortName) {
//         this.cohortClasses.push(cohortN);
//         return this.cohortClasses;
//       } else return "Cohort does not exist";
//     }
//   }


addStudentToCohort (cohortName, student) {
      //   find the cohort with cohortName 
    //   if not found return error
    // if found return cohort.add(student)
    const cohort = this.foundCohort(cohortName)
    if (cohort !== false ) {
        return cohort.add(student)
    } else {
        return false
    }
    
    
}

  foundCohort(cohortN) {
    //   const cohortError = "cohort not found!"
    for (let i = 0; i < this.cohortClasses.length; i++) {
      if (cohortN === this.cohortClasses[i].cohortName) {
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
