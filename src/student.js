import students from './studentsDB.js'

class Student {
  constructor(id) {
    this.id = id
    this.loadStudents()
  }

  loadStudents() {
    const studentData = students.find((std) => std.id === this.id)
    if (studentData) {
      this.firstName = studentData.firstName
      this.lastName = studentData.lastName
      this.githubUsername = studentData.githubUsername
      this.email = studentData.email
    }
  }
}

const ns = new Student(3)
console.log(ns)

export default Student
