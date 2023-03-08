const Student = require('../src/student')
const Cohort = require('../src/cohort')
class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.idCounter = 0
  }

  incrementID() {
    this.idCounter = this.idCounter + 1
    return this.idCounter
  }

  addNewStudent(firstName, lastName, gitHub, email) {
    const ID = this.incrementID()
    const student = new Student(firstName, lastName, gitHub, email, ID)
    this.students.push(student)
    return this.students
  }

  createNewCohort(name) {
    const findcohort = this.findCohortByName(name)
    if (name !== '' && findcohort.name !== name) {
      const newCohort = new Cohort(name)
      this.cohorts.push(newCohort)
      return this.cohorts
    } else {
      return 'cohort name does not meet criteria for a cohort name'
    }
  }

  findStudentByName(name) {
    const student = this.students.find(
      (obj) => obj.firstName + ' ' + obj.lastName === name
    )
    if (student === undefined) {
      return 'Error: no student found'
    } else {
      return student
    }
  }

  findStudentById(id) {
    const student = this.students.find((obj) => obj.StudentID === id)
    if (student === undefined) {
      return 'Error: no student found'
    } else {
      return student
    }
  }

  findCohortByName(name) {
    const cohort = this.cohorts.find((obj) => obj.name === name)
    if (cohort === undefined) {
      return 'Error: no cohort found'
    } else {
      return cohort
    }
  }

  addStudentToCohort(student, cohort) {
    const foundStudent = this.findStudentByName(student)
    const foundCohort = this.findCohortByName(cohort)
    if (foundCohort.students.length < 24) {
      foundCohort.students.push(foundStudent)
      return foundCohort
    } else {
      return 'Cohort full!'
    }
  }

  removeCohort(name) {
    const foundCohort = this.findCohortByName(name)
    const index = this.cohorts.indexOf(foundCohort)
    this.cohorts.splice(index, 1)
    return this.cohorts
  }

  removeStudentFromCohort(cohort, name) {
    const foundCohort = this.findCohortByName(cohort)
    const result = foundCohort.removeStudent(name)
    return result
  }
}

module.exports = CohortManager
