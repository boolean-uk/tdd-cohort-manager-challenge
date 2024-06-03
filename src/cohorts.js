import Student from './student.js'
import student from './student.js'

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
    }
    if (student) {
      this.studentsList.push(student)
    } else {
      throw new Error()
    }
  }
}

export default Cohort

// const nc = new Cohort(1)
// // nc.addStudent('Wrong', 'Saz')
// nc.addStudent('Bart', 'Simpson')
// nc.addStudent('Lisa', 'Simpson')
// nc.addStudent('Homer', 'Simpson')
// nc.addStudent('Eric', 'Cartman')
// nc.addStudent('Kyle', 'Broflovski')
// nc.addStudent('Stan', 'Marsh')

// console.log(nc);
