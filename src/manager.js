const Cohort = require('../src/cohort.js')
const Student = require('./student.js')

class Manager {
  constructor () {
    this.cohorts = []
    this.studentID = 1
  }

  createCohort (cohortName) {
    const cohortToCreate = new Cohort(cohortName)
    this.cohorts.push(cohortToCreate)

    return `${cohortToCreate.name} was created.`
  }

  getCohort (cohortName) {
    const cohort = this.cohorts.find(cohort => cohort.name === cohortName)
    if (cohort) return cohort
    return false
  }

  removeCohort (cohortName) {
    const cohortToRemove = this.getCohort(cohortName)
    if (cohortToRemove) {
      this.cohorts = this.cohorts.filter(cohort => cohort.name !== cohortToRemove.name)
      return cohortToRemove
    }

    return 'Error: Cohort not found.'
  }

  addStudent (firstName, lastName, gitHub, email, cohortName) {
    const cohort = this.getCohort(cohortName)
    if (cohort) {
      const student = new Student(this.studentID, firstName, lastName, gitHub, email)
      cohort.addStudent(student)
      this.studentID++
      return student
    }

    return 'Error: Cohort not found.'
  }

  removeStudent (studentID, cohortName) {
    const cohort = this.getCohort(cohortName)
    try {
      return cohort.removeStudent(studentID)
    }
    catch {
      return 'Error: Student or Cohort not found'
    }
  }
}

module.exports = Manager
