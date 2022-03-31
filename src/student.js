class Student {
  constructor (id, firstName, lastName, githubName, email) {
    this.id = id
    this.fullName = `${firstName} ${lastName}`
    this.githubName = githubName
    this.email = email
  }
}

module.exports = Student
