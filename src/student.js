class Student {
  constructor (firstName, lastName, gitHub) {
    this.fullName = `${firstName} ${lastName}`
    this.gitHub = gitHub
  }
}

module.exports = Student
