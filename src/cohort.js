class Cohort {
  constructor(name, maxCapacity = 24) {
    this.name = name
    this.students = []
    this.maxCapacity = maxCapacity
  }

  removeStudent(name) {
    const student = this.students.indexOf(
      (obj) => obj.firstName + '' + obj.lastName === name
    )
    this.students.splice(student, 1)
    return this.students
  }

  setCapacity(maxCapacity) {
    this.maxCapacity = maxCapacity
  }
}

module.exports = Cohort
