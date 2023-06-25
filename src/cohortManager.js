const Cohort = require('../src/cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.previousStudent = -1
    this._lastStudentId = 0
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  addCohort(cohortName) {
    const cohort = { name: cohortName, students: [] }
    this.cohorts.push(cohort)
    return cohort
  }

  addStudent(student) {
    this.students.push(student)
  }

  getCohortByName(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    if (cohort === undefined) {
      throw new Error('Cohort Not Found')
    }
    return cohort
  }

  getCohort(name) {
    const index = this.cohorts.findIndex((cohort) => cohort.name === name)
    if (index === -1) {
      throw new Error('Cohort Not Found')
    }
    const cohort = this.cohorts[index]
    return cohort
  }

  removeCohortByName(name) {
    const cohort = this.getCohort(name)
    if (cohort !== null) {
      const index = this.cohorts.indexOf(cohort)
      this.cohorts.splice(index, 1)
      return cohort
    }
    return null
  }

  addStudentToCohort(cohortName, student) {
    const cohort = this.getCohort(cohortName)
    if (cohort) {
      cohort.students.push(student)
      return true
    }
    return false
  }

  removeStudentFromCohort(cohortName, studentId) {
    const cohort = this.getCohort(cohortName)
    if (cohort !== null) {
      return cohort.removeStudent(studentId)
    }
    return false
  }
}

module.exports = CohortManager
