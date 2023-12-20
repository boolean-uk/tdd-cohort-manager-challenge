class Student {
  constructor(firstName, lastName, email, githubUsername) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email || ""
    this.githubUsername = githubUsername || ""
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  assignCohort(cohortObj) {
    this.inCohort = cohortObj
  }
}

export default Student
