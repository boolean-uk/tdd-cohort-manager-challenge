const Student = require('./student.js')

class Cohort {
  constructor(cohortName, capacity = 10) {
    this.cohortName = cohortName
    this.students = []
    this.capacity = capacity
  }

  searchById(id) {
    this.students.find((student) => {
      return student.id === id
    })
  }

  setCapacity(number) {
    return (this.capacity = number)
  }

  addStudentToCohort(firstName, lastName, gitHub, id) {
    const student = new Student(firstName, lastName, gitHub, id)
    if (this.students.length < this.capacity) {
      this.students.push(student)
      return this.students
    }
    return 'Cohort full'
  }

  removeStudentFromCohort(gitHub) {
    this.students.forEach((item, i) => {
      if (item.gitHub === gitHub) {
        this.students.splice(i, 1)
      }
      return this.students
    })
  }
}

module.exports = Cohort
