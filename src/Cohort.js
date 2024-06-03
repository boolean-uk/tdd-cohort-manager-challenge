import Student from './Student.js'
import { v4 as uuidv4 } from 'uuid';

class Cohort {
  constructor(name) {
    this.students = []
    this.id = uuidv4()
    this.name = name
  }

  addStudent(firstName, lastName, githubUsername, email) {
    if (this.students.length < 24) {
      const student = new Student(
        firstName,
        lastName,
        githubUsername,
        email
      )
      this.students.push(student)
      return student
    } else {
      throw new Error('No more than 24 students per cohort')
    }
  }
}

export default Cohort
