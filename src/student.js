
class Student {
  constructor (firstName, lastName, githubName, email) {
    this.id = 0
    this.fullName = `${firstName} ${lastName}`
    this.githubName = githubName
    this.email = email
  }
}

module.exports = Student
