class Cohort {
  constructor() {
    this.cohortObject = {}
    this.cohortList = []
  }

  findCohort(cohortName) {
    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )
    return cohort
  }

  createCohort(cohortName) {
    const existingcohort = this.findCohort(cohortName)
    if (existingcohort) {
      return 'cohort already exists'
    }

    this.cohortObject.cohortName = cohortName
    this.cohortList.push(this.cohortObject)
    return this.cohortList
  }
}

export default Cohort
