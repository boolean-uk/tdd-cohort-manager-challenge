import Student from './student.js'

class Cohort {
  constructor(name) {
    this.name = name
    this.studentsList = []
  }

  addStudent(firstName, lastName) {
    const cohortFullMsg = `Cohort ${this.name} is full. No more students can be added. Choose another cohort`
    const student = new Student(firstName, lastName)
    if (this.studentsList.length === 5) {
      throw new Error(cohortFullMsg)
    } else {
      this.studentsList.push(student)
      process.stdout.write(
        `${firstName} ${lastName} was succesfully added to Cohort ${this.name}\n`
      )
    }
  }
  removeStudent(firstName, lastName) {}
}

export default Cohort
