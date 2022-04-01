const { v4: uuidv4 } = require('uuid')

class Student {
  constructor (firstName, lastName, githubName, email) {
    this.id = uuidv4()
    this.fullName = `${firstName} ${lastName}`
    this.githubName = githubName
    this.email = email
  }
}

module.exports = Student
