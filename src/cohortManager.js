import Cohort from './cohort.js'

export default class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name, capacity) {
    const cohort = new Cohort(name, capacity)
    return this.cohorts.push(cohort)
  }

  searchCohortByName(name) {
    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)

    if (typeof foundCohort === 'undefined') {
      throw new Error('cohort name not found')
    }

    return foundCohort
  }
}
