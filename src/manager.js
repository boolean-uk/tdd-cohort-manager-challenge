const Cohort = require('../src/cohort.js')

class Manager {
  constructor () {
    this.cohorts = []
  }

  createCohort (cohortName) {
    const cohortToCreate = new Cohort(cohortName)
    this.cohorts.push(cohortToCreate)

    return `${cohortToCreate.name} was created.`
  }

  getCohort (cohortName) {
    const cohort = this.cohorts.find(cohort => cohort.name === cohortName)
    if (cohort) return cohort
    return false
  }
}

module.exports = Manager
