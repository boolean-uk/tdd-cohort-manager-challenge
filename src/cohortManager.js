// CohortManager.js
class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    const cohort = { name: cohortName, students: [] }
    this.cohorts.push(cohort)
    return cohort
  }
}

export default CohortManager
