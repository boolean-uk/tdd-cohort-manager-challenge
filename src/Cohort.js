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
    const locatedStudent = this.students.find(
        (students) => students.studentId === studentId
    )
    if (!locatedStudent) {
        throw new Error('This student does not exist')
    }
    return locatedStudent
}

export default Cohort
