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
}

export default Cohort
