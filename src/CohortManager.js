const Cohort = require('./Cohort.js')
// const Student = require('./Student.js')

class Cohortmanager {
  constructor() {
    this.studentList = []
    this.cohortList = []
    this.studentId = 1
  }

  createCohort(name) {
    if (name != null) {
      String(name)
      const createdCohort = new Cohort(name)
      this.cohortList.push(createdCohort)
      return this.cohortList
    } else {
      throw new TypeError(`A Cohort must have a name`)
    }
  }
}

module.exports = Cohortmanager
