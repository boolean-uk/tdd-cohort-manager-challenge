const Student = require('./student.js')

class Cohorts {
  constructor(cohortName) {
    this.name = cohortName
    this.students = []
  }

  addStudentToStudentList(id, studentName, gitHub, email) {
    const newStudent = new Student(id, studentName, gitHub, email)
    this.students.push(newStudent)
    return this.students
  }
}

module.exports = Cohorts
