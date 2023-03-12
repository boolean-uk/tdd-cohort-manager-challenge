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
    const filteredCohorts = this.cohorts.filter(
      (element) => element.cohortName !== cohortName
    )
    this.cohorts = filteredCohorts
    return true
  }

  getCohorts() {
    return this.cohorts
  }
}

module.exports = CohortManager
