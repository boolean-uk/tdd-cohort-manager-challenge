class Cohort {
  constructor() {
    this.cohortName = ''
  }

  createCohort(cohortName) {
    this.cohortName = cohortName
    return cohortName
  }
}

export default Cohort
