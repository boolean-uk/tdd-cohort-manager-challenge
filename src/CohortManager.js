import 'jasmine-expect'
import Cohort from './Cohort.js'

class CohortManager {
  constructor() {
    this.cohorts = []
    this.cohortIdCount = 1
  }

  addCohort(name) {
    const cohort = new Cohort(this.cohortIdCount, name)
    this.cohorts.push(cohort)
    this.cohortIdCount++
  }
}

export default CohortManager
