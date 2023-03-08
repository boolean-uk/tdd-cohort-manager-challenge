class Student {
  constructor(
    id,
    firstname,
    lastname,
    git = 'not provided',
    email = 'not provided'
  ) {
    this.id = id
    this.firstName = firstname
    this.lastName = lastname
    this.gitName = git
    this.email = email
    this.inCohort = false
  }
}

module.exports = Student
