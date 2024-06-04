import Student from './student.js'

class Cohort {
  constructor(name) {
    this.name = name
    this.studentsList = []
  }

  studentExists(firstName, lastName) {
    if (this.studentsList.length > 0) {
      const allreadyIn = this.studentsList.find(
        (std) => std.firstName === firstName && std.lastName === lastName
      )
      if (allreadyIn) {
        console.log(
          `${firstName} ${lastName} is already enrolled in Cohort ${this.name}\n`
        )
        throw new Error(
          `${firstName} ${lastName} is already enrolled in Cohort ${this.name}`
        )
      }
    }
  }

  addStudent(firstName, lastName) {
    const cohortFullMsg = `Cohort ${this.name} is full. No more students can be added. Choose another cohort`
    const student = new Student(firstName, lastName)
    this.studentExists(student.firstName, student.lastName)

    if (this.studentsList.length === 24) {
      throw new Error(cohortFullMsg)
    } else {
      this.studentsList.push(student)
      console.log(
        `${firstName} ${lastName} was succesfully added to Cohort ${this.name}\n`
      )
    }
  }

  removeStudent(firstName, lastName) {
    const studentToRemove = this.studentsList.findIndex(
      (std) => std.firstName === firstName && std.lastName === lastName
    )
    if (studentToRemove !== -1) {
      this.studentsList.splice(studentToRemove, 1)
      console.log(
        `${firstName} ${lastName} was succesfully removed from Cohort ${this.name}\n`
      )
    } else {
      const errorMsg = `There is no student named ${firstName} ${lastName} in Cohort ${this.name}\n`
      console.log(errorMsg)
      throw new Error(errorMsg)
    }
  }

  findStudent(id) {
    const found = this.studentsList.find((std) => std.id === id)
    if (found) {
      console.log(`Here is the student with id ${id} \n`)
      console.log(JSON.stringify(found, null, 2) + '\n')
      return found
    } else {
      const errorMsg = `There is no student with id ${id} in Cohort ${this.name}\n`
      console.log(errorMsg)
      throw new Error(errorMsg)
    }
  }
}

export default Cohort

// const nc = new Cohort(1)
// nc.addStudent('Wrong', 'Saz')
// nc.addStudent('Bart', 'Simpson')
// nc.addStudent('Bart', 'Simpson')
// nc.addStudent('Lisa', 'Simpson')
// nc.addStudent('Homer', 'Simpson')
// nc.addStudent('Eric', 'Cartman')
// nc.addStudent('Kyle', 'Broflovski')
// nc.addStudent('Stan', 'Marsh')
// nc.addStudent('Stan', 'Marsh')
// console.log(nc)
// nc.removeStudent('Stan', 'Marsh')
// console.log(nc)
// nc.removeStudent('Stan', 'Marsh')
// nc.findStudent(22)
