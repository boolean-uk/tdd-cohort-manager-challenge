class CohortManager {
  constructor () {
    this.cohortList = []
  }

  createCohort (cohortName) {
    const newCohort = cohortName
    this.cohortList.push(newCohort)
    // console.log("NEW COHORT: ",newCohort)
    // console.log("COHORT LIST: ",this.cohortList)
    return newCohort
  }

  searchByCohortName (cohortName) {
    // console.log("COHORT LIST: ", this.cohortList);
    let cohortFound = false
    for (let i = 0; i < this.cohortList.length; i++) {
      // console.log("ITERATION: ",i,"COHORT: ",this.cohortList[i],"COHORT FOUND: ",cohortFound);
      if (this.cohortList[i] === cohortName) {
        cohortFound = true
        // console.log("CONSOLE IN LOOOOP: ", this.cohortList[i])
        return this.cohortList[i]
      }
    }
    if (cohortFound === false) {
      // console.log("ERROR MESSAGE");
      return 'COHORT NOT FOUND'
    }
  }

  addStudent (cohortName, firstName, lastName) {
    const newStudent = {
      firstName: firstName,
      lastName: lastName
    }
    // console.log("NEW STUDENT: ", newStudent)
    // console.log("COHORT LIST: ", this.cohortList)
    for (let i = 0; i < this.cohortList.length; i++) {
      // console.log("ITERATION: ", i, "COHORT: ", this.cohortList[i]);
      if (this.cohortList[i] === cohortName) {
        this.cohortList[i] = newStudent
      }
    }
    // console.log("UPDATED LIST: ", this.cohortList)
    return this.cohortList
  }

  removeCohort (cohortName) {
    let cohortFound = false
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i] === cohortName) {
        this.cohortList.splice(i, 1)
        cohortFound = true
        return this.cohortList
      }
    }
    if (cohortFound === false) {
      return 'NOT A VALID COHORT NAME'
    }
  }

  // removeStudent(cohortName, firstName, lastName) {

  //   console.log("COHORT LIST: ",this.cohortList)

  // }
}

// class Cohorts {
//   constructor (name) {
//     this.cohorts = []
//   }
// }

// class Student {
//   constructor (id, firstName, lastName, gitHub, email) {
//     this.id = id
//     this.firstName = firstName
//     this.lastName = lastName
//     this.gitHub = gitHub
//     this.email = email
//   }
// }

module.exports = CohortManager
