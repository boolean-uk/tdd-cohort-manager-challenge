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

  searchCohort(name) {
    const targCoh = this.cohorts.find((c) => c.cohortName === name)
    return targCoh
  }
}

module.exports = CohortManager
