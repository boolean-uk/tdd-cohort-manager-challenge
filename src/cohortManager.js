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

  getCohort(name) {
    const index = this.cohorts.findIndex((cohort) => cohort.name === name)
    if (index === -1) {
      throw new Error('Cohort not found')
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

  addStudentToCohort(cohortName, firstName, lastName, gitHub, email) {
    const cohort = this.getCohort(cohortName)
    let student = null

    if (cohort !== null) {
      this.previousStudent += 1
      student = new Student(
        this.previousStudent,
        firstName,
        lastName,
        gitHub,
        email
      )
      if (!cohort.addStudentTo(student)) {
        student = null
      } else {
        this.previousStudent -= 1
      }
    }
    return student
  }
}
module.exports = CohortManager
