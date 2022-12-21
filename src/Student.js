let counter = 1

class Student {
  constructor(firstName, lastName, githubUsername, email) {
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
    this.id = counter++
  }
}

module.exports = { Student }
