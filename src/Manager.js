class Manager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohort) {
    this.cohorts.push(cohort)
  }

  removeCohortByName(name) {
    this.cohorts = this.cohorts.filter((cohort) => cohort.CohortName !== name)
  }

  findCohortByName(name) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.CohortName === name
    )
    if (!foundCohort) {
      throw new Error('Cohort does not exist')
    }
    return foundCohort
  }
}
export default Manager
