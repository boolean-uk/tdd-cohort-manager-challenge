const Cohort = require('./Cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    !this.hasCohort(name) && this.cohorts.push(new Cohort(name))
  }
  get cohortsLength() {
    return this.cohorts.length
  }
  findCohort(name) {
    return this.cohorts.find((e) => e.name === name)
  }
  hasCohort(name) {
    return this.cohorts.find((e) => e.name === name) !== undefined
  }
  addStudents(cohort, ...students) {
    this.findCohort(cohort).addStudents(...students)
  }
  deleteStudent(cohort, studentId) {
    this.findCohort(cohort).deleteStudent(studentId)
  }
  deleteCohort(name) {
    this.cohorts.splice(
      this.findIndex((e) => e.name === name),
      1
    )
  }
}

module.exports = CohortManager
