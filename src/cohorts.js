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

  removeStudentFromCohort(studentName) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].firstName === studentName) {
        this.students.splice(i, 1)
      }
    }
    return this
  }
}

module.exports = Cohorts
