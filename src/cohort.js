const Student = require('../src/student')
const CohortManager = require('../src/CohortList')

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }
}

module.exports = Cohort
