class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    const existingCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )

    if (existingCohort) {
      throw new Error('Cohort name already exists')
    }
    const cohort = { name: cohortName, students: [] }
    this.cohorts.push(cohort)
    return cohort
  }

  findCohort(cohortName) {
    return this.cohorts.find((cohort) => cohort.name === cohortName)
  }
}

export default CohortManager
