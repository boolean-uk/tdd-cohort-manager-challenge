class Student {
  constructor(name, lastN, gitLink, email, id = 1) {
    this.id = id
    this.name = name
    this.lastN = lastN
    this.gitLink = gitLink
    this.email = email
  }
}

module.exports = Student
