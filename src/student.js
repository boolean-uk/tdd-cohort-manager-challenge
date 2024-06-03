import students from './studentsDB.js'

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.loadStudents()
  }

  loadStudents() {
    const studentData = students.find(
      (std) =>
        std.firstName === this.firstName && std.lastName === this.lastName
    )
    if (studentData) {
      this.id = studentData.id
      this.githubUsername = studentData.githubUsername
      this.email = studentData.email
    }
  }
}

const ns = new Student('Pickle Rick', 'Sanchez')
console.log(ns)

export default Student
