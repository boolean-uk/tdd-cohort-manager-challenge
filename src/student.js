class Student {
  constructor (id, first, last, github, email) {
    this.id = id
    this.firstname = first
    this.lastname = last
    this.github = github
    this.email = email
  }

  checkID (id) {
    return this.id === id
  }
}

module.exports = Student
