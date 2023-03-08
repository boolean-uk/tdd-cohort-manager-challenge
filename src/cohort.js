class Cohort {
  constructor(name) {
    this.name = name
    this.maxStudents = 24
    this.students = []
  }

  addStudent(student) {
    this.students.push(student)
  }
}

module.exports = Cohort
