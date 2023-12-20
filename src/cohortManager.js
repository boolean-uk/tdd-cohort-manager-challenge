class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    const duplicate = this.cohorts.some((cohort) => cohort.name === cohortName)

    if (!duplicate) {
      this.cohorts.push({
        name: cohortName,
        students: []
      })
      return this.cohorts.find((cohort) => cohort.name === cohortName)
    } else {
      return `${cohortName} already exists`
    }
  }
}

export default CohortManager
