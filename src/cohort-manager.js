class CohortManager {
  constructor() {
    this.list = []
  }

  setList(cohort) {
    this.list.push(cohort)
    return this.list
  }

  searchBy(name) {
    return this.list.find((cohort) => cohort.cohortName === name)
  }
}
export { CohortManager }
