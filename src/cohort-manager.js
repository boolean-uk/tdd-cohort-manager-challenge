const Cohort = require('./cohort')

class CohortManager {
  constructor () {
    this.cohortArray = []
  }

  addCohort (name, maxCapacity) {
    const cohort = new Cohort(name, maxCapacity)
    for (let i = 0; i < this.cohortArray.length; i++) {
      if (name === this.cohortArray[i].name) {
        return false
      }
    }
    this.cohortArray.push(cohort)
    return this.cohortArray
  }

  searchByCohortName (name) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      if (name === this.cohortArray[i].name) {
        return this.cohortArray[i]
      }
    }
    return false
  }
}

module.exports = CohortManager
