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
    // console.log('X: search: ', cohortName, this.cohorts)
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
      //   console.log(
      //     i,
      //     cohortName,
      //     this.cohorts[i],
      //     this.cohorts[i].name,
      //     this.cohorts.length
      //   )
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
    // console.log('X: add: ', cohort)
    if (cohort) {
      //   console.log('X: add: before: ', cohort)
      cohort.students.push(student)
      //   console.log('X: add: after: ', cohort)
      return student
    }
    return false
  }

  removeStudent(cohortName, student) {
    let removedStudent = []
    const foundCohort = this.searchForCohort(cohortName)
    if (foundCohort) {
      //   console.log('X: found Cohort', foundCohort)
      for (let i = 0; i < foundCohort.students.length; i++) {
        if (foundCohort.students[i].name === student.name) {
          //   console.log('X: found student')
          removedStudent = foundCohort.students.splice(i, 1)
        }
      }
      return removedStudent
    }
    return false
  }
}

module.exports = CohortManager
