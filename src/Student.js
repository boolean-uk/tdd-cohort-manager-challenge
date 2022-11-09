class Student {
  constructor(firstN, lastN, gitLink, email, id = 1) {
    this.id = id
    this.firstN = firstN
    this.lastN = lastN
    this.gitLink = gitLink
    this.email = email
  }
}

module.exports = Student
