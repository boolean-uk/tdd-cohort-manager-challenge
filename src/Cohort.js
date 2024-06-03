import Student from './Student.js'

class Cohort {
  constructor(id, name) {
    this.students = []
    this.id = id
    this.name = name
    this.studentIdCount = 1
  }

  addStudent(firstName, lastName) {
    const student = new Student(firstName, lastName, this.studentIdCount)
    this.students.push(student)
    this.studentIdCount++
  }
}

export default Cohort
