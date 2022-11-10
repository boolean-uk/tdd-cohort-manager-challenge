const Cohort = require('./Cohort.js')
const Student = require('./Student.js')

class Cohortmanager {
  constructor() {
    this.studentList = []
    this.cohortList = []
    this.studentId = 1
  }

  createCohort(name) {
    if (name === null) {
      throw new Error('A Cohort must have a name')
    }
    if (typeof name !== 'string') {
      throw new Error('A Cohort must be a sequence of characters')
    }
    const createdCohort = new Cohort(name)
    this.cohortList.push(createdCohort)
    return this.cohortList
  }

  createStudent(firstname, surname, gitHub, email) {
    const createdStudent = new Student(
      firstname,
      surname,
      this.studentId,
      gitHub,
      email
    )
    this.studentId++
    this.studentList.push(createdStudent)
    return createdStudent
  }
}

module.exports = Cohortmanager
