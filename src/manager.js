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

  removeCohort (cohortName) {
      const cohortToRemove = this.getCohort(cohortName)
      if (cohortToRemove) {
        this.cohorts = this.cohorts.filter(cohort => cohort.name !== cohortToRemove.name)
        return cohortToRemove
      }

      return 'Error: Cohort not found.'
  }
}

module.exports = Manager
