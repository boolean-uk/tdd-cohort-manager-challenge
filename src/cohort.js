class Cohort {
  constructor (name) {
    this.name = name
    this.students = []
  }

  addStudent (student) {
    this.students.push(student)
    return student
  }
}

module.exports = Cohort
