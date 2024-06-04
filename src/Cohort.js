const { requireParam } = require('./utils')
const Student = require('./Student')

class Cohort {
  constructor(name, ...students) {
    this.name = requireParam('name', name)
    this._students = students.slice(0, 25)
  }

  addStudents(...args) {
    for (
      let i = this.studentsCount, j = 0;
      i < 24 && j < args.length;
      i++, j++
    ) {
      if (args[j] instanceof Student && !this.hasStudent(args[j].id))
        this._students.push(args[j])
    }
  }

  get studentsCount() {
    return this._students.length
  }

  findStudent(id) {
    const student = this._students.find((e) => e.id === id)

    if (!student) throw Error("Couldn't find student")

    return student
  }

  hasStudent(id) {
    return this._students.find((e) => e.id === id) !== undefined
  }

  deleteStudent(id) {
    this._students.splice(
      this._students.findIndex((e) => e.id === id),
      1
    )
  }
}

module.exports = Cohort
