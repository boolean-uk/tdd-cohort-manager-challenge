const Cohort = require('./cohort')
const Student = require('./student')
// const Student = require('./student')

class CohortManager {
  constructor() {
    this.students = []
    this.cohorts = []
  }

  createCohort(name) {
    const cohortToAdd = new Cohort(name)
    const doesNotExist =
      this.cohorts.find((cohort) => cohort.name === cohortToAdd.name) ===
      undefined
    if (doesNotExist) {
      this.cohorts.push(cohortToAdd)
    } else {
      return 'Cohort already exists'
    }
  }

  searchCohort(name) {
    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (foundCohort === undefined) return 'Cohort not found'
    else return foundCohort
  }

  newStudent(first, last, git, email) {
    let nextId
    if (this.students.length > 0) {
      nextId = this.students[this.students.length - 1].id + 1
    } else {
      nextId = 1
    }
    const studentToAdd = new Student(nextId, first, last)
    this.students.push(studentToAdd)
  }

  addStudentToCohort(id, cohort) {
    const studentToAdd = this.students.find((student) => student.id === id)
    const targetCohort = this.searchCohort(cohort)
    if (studentToAdd === undefined) return 'Student does not exist'
    if (targetCohort === 'Cohort not found') return 'Cohort does not exist'
    targetCohort.addStudent(studentToAdd)
  }

  removeCohort(name) {
    const targetCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (targetCohort === undefined) return 'Cohort does not exist'
    const removeIndex = this.cohorts.findIndex(
      (cohort) => cohort === targetCohort
    )
    this.cohorts.splice(removeIndex, 1)
  }
}

module.exports = CohortManager
