class Cohortmanager {
  constructor() {
    this.cohorts = []
  }

  create(cohortName) {
    const cohort = {
      name: cohortName
    }
    this.cohorts.push(cohort)
    return cohort
  }

  search(name) {
    return this.cohorts.find((cohort) => cohort.name === name)
  }
}
export default Cohortmanager
