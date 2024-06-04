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
      if (args[j] instanceof Student) this._students.push(args[j])
    }
  }

  get studentsCount() {
    return this._students.length
  }

  findStudent({ id, name }) {
    return this._students.find((e) => e.id === id || e.name === name)
  }
}

module.exports = Cohort
