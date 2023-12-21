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
    const studentIndex = this.students.findIndex(
      (student) => student.studentId === studentId
    )
    if (studentIndex === -1) {
      throw new Error('This student does not exist')
    }
    // Remove the student from the array
    this.students.splice(studentIndex, 1)
  }
}

export default Cohort
