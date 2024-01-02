class Cohort {
  constructor(name) {
    this.students = []
    this.CohortName = name
    this.cohortList = []
  }

  addCohort(cohort) {
    this.cohortList.push(cohort)
  }

  findCohortByName(name) {
    const foundCohort = this.cohortList.find(
      (cohort) => cohort.CohortName === name
    )
    if (!foundCohort) {
      throw new Error('Cohort does not exist')
    }
    return foundCohort
  }
}

export default Cohort
