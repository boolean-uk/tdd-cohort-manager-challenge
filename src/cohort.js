class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  search(name) {
    const found = this.cohorts.find((Cohort) => Cohort.name === name)
    return found
  }

  remove(name) {
    const updatedCohortsList = this.cohorts.filter(
      (cohort) => cohort.name !== name
    )
    this.cohorts = updatedCohortsList
    return this.cohorts
  }
}

// eslint-disable-next-line prettier/prettier
    class Cohort {
  constructor(name) {
    this.name = name
  }
}
export { Cohort }
export default CohortManager
