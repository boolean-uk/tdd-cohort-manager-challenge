class Cohort {
  constructor(cohortName) {
    if (!cohortName) {
      throw new Error('cohort could not be created - missing input')
    }
    this.cohortName = cohortName
    this.id = undefined
    this.students = []
  }
}

export { Cohort }
