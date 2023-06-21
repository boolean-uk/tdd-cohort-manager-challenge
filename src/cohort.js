class Cohort {
  constructor() {
    this.cohortObject = {}
    this.cohortList = []
  }

  findCohort(cohortName) {
    const cohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (!cohort) {
      return 'cohort does not exist'
    }
    return cohort
  }

  createCohort(cohortName) {
    const existingCohort = this.cohortList.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (existingCohort) {
      return 'cohort already exists'
    }

    this.cohortObject.cohortName = cohortName
    this.cohortList.push(this.cohortObject)
    return this.cohortList
  }
}

export default Cohort
