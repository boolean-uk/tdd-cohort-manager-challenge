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

  getCohorts() {
    return this.cohorts
  }
}

module.exports = CohortManager
