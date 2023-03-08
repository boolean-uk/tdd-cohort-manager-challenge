const Student = require('../src/student')
const CohortManager = require('../src/CohortList')

class cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  addStudentToCohort(firstName, lastName, gitHub, email) {
    const ID = CohortManager.incrementID()
    const student = new Student(firstName, lastName, gitHub, email, ID)
    this.students.push(student)
  }
}

module.exports = cohort
