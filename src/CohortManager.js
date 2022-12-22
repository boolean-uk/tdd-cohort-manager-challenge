const Cohort = require('../src/Cohort.js')

class CohortManager {
  constructor() {
    this.cohortList = []
  }

  createCohort(name) {
    this.cohortList.push(new Cohort(name))
    return this.cohortList
  }

  searchCohort(name) {
    for (const cohort of this.cohortList) {
      if (cohort.cohortName === name) {
        return cohort
      }
    }
    return 'Error : No cohort found!'
  }
}
module.exports = CohortManager
