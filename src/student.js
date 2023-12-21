let countID = 1

class Student {
  constructor(studentID, firstName, lastName, gitHub, email) {
    this.studentId = studentID
    this.firstName = firstName
    this.lastname = lastName
    this.gitHub = gitHub
    this.email = email
  }
}

export { Student, countID }
