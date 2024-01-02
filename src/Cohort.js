class Cohort {
  constructor(name) {
    this.students = []
    this.cohortName = name
  }

  addStudent(student) {
    this.students.push(student)
  }

  removeStudentByName(studentFirstName) {
    const studentIndex = this.students.findIndex(
      (student) => student.firstName === studentFirstName
    )
    if (studentIndex === -1) {
      throw new Error('Student does not exist')
    }
    this.students.splice(studentIndex, 1)
  }
}

class Student {
  constructor(firstName, lastName, gitUser, email, studentId) {
    this.firstName = firstName
    this.lastName = lastName
    this.gitUser = gitUser
    this.email = email
    this.studentId = studentId
  }
}

export { Cohort, Student }
