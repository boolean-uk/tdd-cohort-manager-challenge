class Student {
  constructor(firstName, lastName, gitHub, id) {
    this.fullName = `${firstName} ${lastName}`
    this.gitHub = gitHub
    this.id = id
  }
}

module.exports = Student
