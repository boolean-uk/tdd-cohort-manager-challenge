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
}

module.exports = Manager
