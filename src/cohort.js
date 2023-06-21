class Cohort {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohortName) {
    if (this.cohortList.includes(cohortName)) {
      return 'cohort already exists'
    }
    this.cohortList.push(cohortName)
    return this.cohortList
  }
}

export default Cohort
