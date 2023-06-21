class CohortManager {
  constructor() {
    this.cohorts = []
    this.newCohortID = 0
  }

  createCohort(cohortName) {
    if (this.cohorts.find((item) => item.name === cohortName)) {
      throw new Error('Cohort already exists')
    } else {
      this.newCohortID++
      const newCohort = { id: this.newCohortID, name: cohortName, students: [] }
      this.cohorts.push(newCohort)
    }
  }
}

module.exports = CohortManager
