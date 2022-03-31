// const Cohort = require('../src/cohort.js')

class CohortManager {
  constructor() {
    this.cohorts = []
    this.student = []

    // this.removedCohort = []
  }

  createCohorts(cohort) {
    // Take cohort name & generate new cohort (from cohort class)
    // this.name = name;
    // Then save it in list of cohorts
    // console.log()
    this.cohorts.push(cohort)
    // Return updated list of cohorts
    return cohort.name
  }

  searchForCohort(cohortName) {
    // const searchArray = []
    for (let i = 0; i < this.cohorts.length; i++) {
      if (cohortName === this.cohorts[i].name) {
        // searchArray.push(this.cohorts[i])
        return this.cohorts[i]
      }
    }
    return false
  }

  removeCohort(cohortName) {
    let removedCohort = []
    // Go to cohort list & loop through to find the correct cohort(s)
    for (let i = 0; i < this.cohorts.length; i++) {
      console.log(
        i,
        cohortName,
        this.cohorts[i],
        this.cohorts[i].name,
        this.cohorts.length
      )
      // // splice the array once the correct cohort is found to be true (create variable)
      if (cohortName === this.cohorts[i].name) {
        // We have found the cohort & it's at index i
        // Get this cohort & store in a variable so we can return it after

        // Then we want to remove the cohort from the cohort list
        removedCohort = this.cohorts.splice(i, 1)
        return removedCohort
        // If no cohort is found (false) then return an error
        // Two tests - one for removing & one for if doesn't exist
      }
    }
    return removedCohort
  }

  addStudent(cohortName, student) {
    const cohort = this.searchForCohort(cohortName)
    if (cohort) {
      cohort.students.push(student)
      return student
    }
    return false
  }
}

module.exports = CohortManager
