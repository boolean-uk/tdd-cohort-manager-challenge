import Cohort from './cohort.js'

class CohortManager {
  constructor() {
    this.cohortList = []
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohortList.push(cohort)
    return cohort
  }
}

export default CohortManager
