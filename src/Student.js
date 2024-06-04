const { v4: uuidv4 } = require('uuid')

const { requireParam } = require('./utils')

class Student {
  constructor(firstName, lastName, github, email) {
    this.firstName = requireParam('firstName', firstName)
    this.lastName = requireParam('lastName', lastName)
    this.github = requireParam('github', github)
    this.email = requireParam('email', email)
    this._id = uuidv4()
  }

  get id() {
    return this._id
  }
}
module.exports = Student
