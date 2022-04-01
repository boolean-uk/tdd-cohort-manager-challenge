const Student = require('./student.js')

class Cohort {
  constructor (cohortName) {
    this.cohortName = cohortName
    this.students = []
  }

  addStudentToCohort (firstName, lastName, gitHub) {
    const student = new Student(firstName, lastName, gitHub)
    this.students.push(student)
    return this.students
  }

  removeStudentFromCohort (gitHub) {
    this.students.forEach((item, i) => {
      if (item.gitHub === gitHub) {
        this.students.splice(i, 1)
      }
      return this.students
    })
  }
}

module.exports = Cohort
