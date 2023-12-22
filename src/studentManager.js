import Student from './student.js'

export default class StudentManager {
  constructor() {
    this.students = []
  }

  createStudent(details) {
    const student = new Student(details)
    return this.students.push(student)
  }
}
