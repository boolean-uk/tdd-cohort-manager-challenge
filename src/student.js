class Student {
  constructor(id, studentName, gitHub, email) {
    this.id =
      id +
      '_' +
      studentName.split(' ')[0][0] +
      '_' +
      studentName.split(' ')[1][0]
    this.firstName = studentName.split(' ')[0]
    this.lastName = studentName.split(' ')[1]
    this.gitHub = gitHub
    this.email = email
  }
}

module.exports = Student
