import { countID } from './cohort-manager.js'

class Student {
  constructor(firstName, lastName, gitHub, email) {
    this.studentId = countID
    this.firstName = firstName
    this.lastName = lastName
    this.gitHub = gitHub
    this.email = email
  }
}

export { Student }
