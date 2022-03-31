class Student {
  constructor (studentName, gitHub, email) {
    this.id = 1
    this.firstName = studentName.split(' ')[0]
    this.lastName = studentName.split(' ')[1]
    this.gitHub = gitHub
    this.email = email
  }
}

module.exports = Student
