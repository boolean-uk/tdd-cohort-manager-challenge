const Cohort = require('./cohort')

class CohortManager {
  constructor(students, cohorts) {
    this.students = students
    this.cohorts = cohorts
  }

  createCohort(cohortName) {
    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)
    return true
  }

  removeCohort(cohortName) {
    // .some() is comparing the class objects in this.cohorts if it includes the property
    // I couldn't use .includes() as it only compares the references of objects
    if (!this.cohorts.some((obj) => obj.cohortName === cohortName)) {
      return null
    } else {
      const filteredCohorts = this.cohorts.filter(
        (element) => element.cohortName !== cohortName
      )
      this.cohorts = filteredCohorts
      return true
    }
  }

  getCohorts() {
    return this.cohorts
  }
}

module.exports = CohortManager
