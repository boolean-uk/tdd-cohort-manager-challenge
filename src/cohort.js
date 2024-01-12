class Cohort {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohortName) {
    const newCohort = { name: cohortName }
    this.cohortList.push(newCohort)
  }
}

export default Cohort
