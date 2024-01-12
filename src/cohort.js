class Cohort {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohortName) {
    const newCohort = { name: cohortName }
    this.cohortList.push(newCohort)
  }

  searchCohortByName(name) {
    const foundCohort = this.cohortList.find((cohort) => cohort.name === name)
    return foundCohort || null
  }
}

export default Cohort
