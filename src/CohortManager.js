const Cohort = require('./Cohort.js')
// const Student = require('./Student.js')

class Cohortmanager {
  constructor() {
    this.studentList = []
    this.cohortList = []
    this.studentId = 1
  }

  createCohort(name) {
    if (name === null) {
        return `A Cohort must have a name`
    }
    if (typeof name != "string") {
        return `A Cohort must be a sequence of characters`
    }
      let stringName = name.toString()
      const createdCohort = new Cohort(stringName)
      this.cohortList.push(createdCohort)
      return this.cohortList
  }
}

module.exports = Cohortmanager
