class Student {
  constructor(firstName, lastName, gitHub, uniqueId) {
    this.fullName = `${firstName} ${lastName}`
    this.gitHub = gitHub
    this.uniqueId = uniqueId
  }
}

module.exports = Student
