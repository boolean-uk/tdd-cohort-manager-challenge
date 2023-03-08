class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  removeStudent(name) {
    const student = this.students.indexOf(
      (obj) => obj.firstName + '' + obj.lastName === name
    )
    this.students.splice(student, 1)
    return this.students
  }
}

module.exports = Cohort
