const { Cohort } = require('./Cohort')

class CohortManager {
  constructor() {
    this.students = []
    this.cohorts = []
  }

  isCohortNameUnique(cohortName) {
    const found = this.cohorts.find((cohort) => cohort.name === cohortName)
    return !found
  }

  getUniqueCohortID() {
    if (this.cohorts.length === 0) return 1

    const uniqueID = this.cohorts[this.cohorts.length - 1].cohortID + 1
    return uniqueID
  }

  createCohort(name) {
    if (!this.isCohortNameUnique(name)) return false

    const uniqueID = this.getUniqueCohortID()
    this.cohorts.push(new Cohort().create(name, uniqueID))
    return true
  }
}

module.exports = { CohortManager }
