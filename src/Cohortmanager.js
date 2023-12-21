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
}
export default Cohortmanager
