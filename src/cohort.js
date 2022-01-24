const Student = require('./student')
const ID = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class Cohort {
  constructor (_name) {
    this.name = _name
    this.students = []
    this.studentsNum = 0
  }

  addStudent (id, firstName, lastName, githubUser, email) {
    this.studentsNum++
    const student = new Student(`${ID[this.studentsNum]}.${id}`, firstName, lastName, githubUser, email)
    this.students.push(student)
    return student
  }

  getStudentById (id) {
    return this.students.find(x => x.id === id)
  }
}

module.exports = Cohort
