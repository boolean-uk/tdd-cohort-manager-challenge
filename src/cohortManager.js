const Cohort = require('./cohort')
// const Student = require('./student')

class CohortManager {
  constructor() {
    this.students = []
    this.cohorts = []
  }

  createCohort(name) {
    const cohortToAdd = new Cohort(name)
    this.cohorts.push(cohortToAdd)
  }
}

module.exports = CohortManager
