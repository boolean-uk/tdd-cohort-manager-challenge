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

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  addStudent(student) {
    if (this.students.some((s) => s.studentID === student.studentId)) {
      throw new Error('Student already in cohort')
    }
    this.students.push(student)
  }

  removeStudent(studentID) {
    const studentIndex = this.students.findIndex(
      (s) => s.studentID === studentID
    )
    if (studentIndex === -1) {
      throw new Error('Student not found.')
    }
    this.students.splice(studentIndex, 1)
  }
}

export { Student, Cohort }
