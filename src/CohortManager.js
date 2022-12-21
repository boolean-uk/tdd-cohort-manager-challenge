class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  createCohort(str) {
    const cohort = {
      name: str,
      students: []
    }
    this.cohorts.push(cohort)
    return cohort
  }

  getAllCohorts() {
    return this.cohorts
  }
}

module.exports = CohortManager
