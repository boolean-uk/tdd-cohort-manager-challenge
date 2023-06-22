const Cohort = require('../src/cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }
}
module.exports = CohortManager
