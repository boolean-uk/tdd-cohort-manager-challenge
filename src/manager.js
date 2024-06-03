class Student {
  constructor() {
    this.studentID = ''
    this.firstName = ''
    this.lastName = ''
    this.githubUsername = ''
    this.email = ''
  }

  studentDetails(studentID, firstName, lastName, githubUsername, email) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }

  getName() {
    return `${this.firstName} ${this.lastName}`
  }
}

export { Student }
