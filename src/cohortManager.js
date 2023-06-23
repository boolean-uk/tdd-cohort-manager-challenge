const Cohort = require('../src/cohort')
const Student = require('../src/students')

class CohortManager {
  constructor() {
    this.cohorts = []
    this.previousStudent = -1
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  getCohortByName(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === name) {
        return this.cohorts[i]
      }
    }
    return null
  }

  getCohort(name) {
    const index = this.cohorts.findIndex((cohort) => cohort.name === name)
    if (index === -1) {
      throw new Error('Cohort Not Found')
    }
    const cohort = this.cohorts[index]
    return [cohort, index]
  }

  removeCohortByName(name) {
    const [cohort, index] = this.findByIndex(name)
    this.cohorts.splice(index, 1)
    return cohort
  }

  findByIndex(name) {
    const index = this.cohorts.findIndex((cohort) => cohort.name === name)
    if (index === -1) {
      throw new Error('Cohort not found')
    }
    const cohort = this.cohorts[index]
    return [cohort, index]
  }

  searchCohort(id) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].hasStudentWithID(id)) {
        return this.cohorts[i].getStudentByID(id)
      }
    }
    throw new Error('Student not found')
  }

  addStudentToCohort(cohortName, firstName, lastName, gitHub, email) {
    const cohort = this.getCohortByName(cohortName)
    let student = null

    if (cohort !== null) {
      this.previousStudent += 1
      student = new Student(firstName, lastName, gitHub, email)
    }
    return student
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
