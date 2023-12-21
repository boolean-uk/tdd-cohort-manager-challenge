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

  search(cohortName) {
    return this.cohorts.find((cohort) => cohort.name === cohortName)
  }

  removeBy(name) {
    const cohort = this.search(name)
    if (cohort) {
      const index = this.cohorts.indexOf(cohort)
      return this.cohorts.splice(index, 1)[0]
    } else {
      return null // Cohort not found
    }
  }
}
export default Cohortmanager
