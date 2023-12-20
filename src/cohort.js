class Cohort {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohortName) {
    if (typeof cohortName !== 'string')
      throw new Error('cohort name must be a valid string')
    const newCohort = { name: cohortName, students: [] }
    this.cohortList.push(newCohort)
    return true
  }

  findCohort(cohortName) {
    const cohortToFind = this.cohortList.find(
      (cohort) => cohort.name === cohortName
    )
    if (!cohortToFind) throw new Error('cohort does not exist')
    return cohortToFind
  }
}

export default Cohort
