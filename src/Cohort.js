import Student from './Student.js'

class Cohort {
  constructor(id, name) {
    this.students = []
    this.id = id
    this.name = name
    this.studentIdCount = 1
  }

  addStudent(firstName, lastName, githubUsername, email) {
    if (this.students.length < 24) {
      const student = new Student(firstName, lastName, this.studentIdCount)
      this.students.push(student)
      this.studentIdCount++
    } else {
      throw new Error('No more than 24 students per cohort')
    }
  }
}

export default Cohort
