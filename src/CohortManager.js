class CohortManager {
  constructor() {
    this.cohorts = []
    this.newCohortID = 0
  }

  createCohort(cohortName) {
    this.newCohortID++
    const newCohort = { id: this.newCohortID, name: cohortName, students: [] }
    this.cohorts.push(newCohort)
  }
}

module.exports = CohortManager
