class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const newCohort = {
      cohortName: name,
      students: []
    }
    this.cohorts.push(newCohort)
    return this.cohorts
  }
}

module.exports = CohortManager
