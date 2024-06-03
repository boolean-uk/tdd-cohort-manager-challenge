import Student from './Student.js'

class Cohort {
  static studentIdCount = 1
  constructor(id, name) {
    this.students = []
    this.id = id
    this.name = name
  }

  addStudent(firstName, lastName, githubUsername, email) {
    if (this.students.length < 24) {
      const student = new Student(
        firstName,
        lastName,
        Cohort.studentIdCount,
        githubUsername,
        email
      )
      this.students.push(student)
      Cohort.studentIdCount++
      return student
    } else {
      throw new Error('No more than 24 students per cohort')
    }
  }
}

export default Cohort
