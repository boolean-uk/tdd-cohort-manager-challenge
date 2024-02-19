export default class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohortName) {
    this.cohorts.push({
      name: cohortName,
      students: []
    })
  }

  getCohort(cohortName) {
    return this.cohorts.find((cohort) => cohort.name === cohortName)
  }

  removeCohort(cohortName) {
    if (!this.getCohort(cohortName)) {
      throw new Error(`Cohort ${cohortName} not found`)
    }
    this.cohorts = this.cohorts.filter((cohort) => cohort.name !== cohortName)
  }
}
