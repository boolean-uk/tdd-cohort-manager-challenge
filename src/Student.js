const { v4: uuidv4 } = require('uuid')

const initializeParam = (field, value) => {
  if (!value) throw new TypeError(`${field} is required`)
  else this[field] = value
}

class Student {
  constructor(firstName, lastName, github, email) {
    initializeParam('firstName', firstName)
    initializeParam('lastName', lastName)
    initializeParam('github', github)
    initializeParam('email', email)
    this._id = uuidv4()
  }

  get id() {
    return this._id
  }
}
module.exports = Student
