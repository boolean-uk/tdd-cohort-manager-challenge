const Cohort = require("./Cohort.js")

class CohortManager {
  constructor() {
    this.cohortsList = []
    this.studentsList = []
  }

  createCohort(name) {
    this.cohortsList.push(new Cohort(name))
  }

  getAllCohorts() {
    return this.cohortsList
  }
}

module.exports = CohortManager
