import Student from '../src/Student.js'

class Cohort {
  constructor(name) {
    this.CohortName = name
    this.students = []
  }

  addStudent(student) {
    this.students.push(student)
  }

  removeStudentById(studentId) {
    this.students = this.students.filter(
      (student) => student.studentId !== studentId
    )
  }
}

export default Cohort
