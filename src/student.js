class Student {
  constructor(firstName, lastName, github, email, cohort) {
    this.studentID = 0
    this.firstName = firstName
    this.lastName = lastName
    this.github = github
    this.email = email
    this.cohortID = cohort
  }
}

module.exports = {
  Student
}
