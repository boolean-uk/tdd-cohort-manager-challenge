import Student from '../src/Student.js'

class Cohort {
  constructor(name) {
    this.CohortName = name
    this.students = []
  }

  addStudent(student) {
    this.students.push(student)
  }
}

export default Cohort
