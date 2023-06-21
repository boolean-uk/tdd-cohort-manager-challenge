class CohortDetainment {
  constructor() {
    this.cohortManager = []
  }

  createCohort(cohortName) {
    const newCohort = { [cohortName]: [] }
    this.cohortManager.push(newCohort)
    return newCohort
  }
}

module.exports = CohortDetainment
