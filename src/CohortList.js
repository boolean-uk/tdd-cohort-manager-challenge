const Student = require('../src/student')
const cohort = require('../src/cohort')

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
}

module.exports = CohortManager
