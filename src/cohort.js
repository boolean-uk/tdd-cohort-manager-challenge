// DUMMY DATA
const idCount = 1

class Cohort {
  constructor(cohortName) {
    if (!cohortName) {
      throw new Error('cohort could not be created - missing input')
    }
    this.cohortName = cohortName
    this.id = idCount
    this.students = []
  }
}

export { Cohort }
