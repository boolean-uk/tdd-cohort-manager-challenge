class Cohort {
  constructor(nameCohort) {
    if (nameCohort === undefined) {
      throw new Error('Cohort must be given a name')
    }
    this.IDCohort = 0
    this.nameCohort = nameCohort
    this.maxStudents = 24
    this.studentsInCohort = []
    this.cohortStudentCount = 0
  }
}

module.exports = {
  Cohort
}
