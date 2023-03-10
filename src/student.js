class Student {
  constructor(firstName, lastName, userName, email, ID, inCohort = false) {
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = userName
    this.email = email
    this.StudentID = ID
    this.addedToCohort = inCohort
  }
}

module.exports = Student
