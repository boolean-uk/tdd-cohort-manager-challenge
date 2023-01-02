const Student = require('../src/Student.js')
class Cohort {
  constructor(name) {
    this.cohortName = name
    this.studentList = []
  }

  addStudent(id, firstName, lastName, githubUser, email) {
    const student = new Student(id, firstName, lastName, githubUser, email)
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].studentID === id) return 'Students alreday exist'
    }
    this.studentList.push(student)
    return student
  }
}
module.exports = Cohort
