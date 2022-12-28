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

  removeCohort(name) {
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].cohortName === name) {
        this.cohortList.splice(i, 1)
        return 'This cohort has been removed: ' + name
      }
    }
    return 'Error : Cohort does not exist'
  }
}
module.exports = CohortManager
