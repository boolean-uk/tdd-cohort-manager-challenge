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
    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
    return this.cohorts
  }

  findStudentByName(name) {
    const student = this.students.find(
      (obj) => obj.firstName + ' ' + obj.lastName === name
    )
    return student
  }

  findCohortByName(name) {
    const cohort = this.cohorts.find((obj) => obj.name === name)
    return cohort
  }

  addStudentToCort(student, cohort) {
    const foundStudent = this.findStudentByName(student)
    const foundCohort = this.findCohortByName(cohort)
    foundCohort.students.push(foundStudent)
    return foundCohort
  }
}

module.exports = CohortManager
