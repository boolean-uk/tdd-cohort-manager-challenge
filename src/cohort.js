class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  addStudent(student) {
    this.students.push(student)
  }
}

module.exports = Cohort
