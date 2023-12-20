import Cohort from './cohort.js'

class CohortManager {
  constructor() {
    this.cohortList = []
  }

  createCohort(name) {
    if (name.length === 0) throw new Error('Cohort needs a name!')
    const cohort = new Cohort(name)
    this.cohortList.push(cohort)
    return cohort
  }
}

export default CohortManager

// const cohortManager = new CohortManager()
// cohortManager.createCohort('')
