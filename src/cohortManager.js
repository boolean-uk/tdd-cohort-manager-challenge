import Cohort from './cohort.js'

export default class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name, capacity) {
    const cohort = new Cohort(name, capacity)
    return this.cohorts.push(cohort)
  }
}
