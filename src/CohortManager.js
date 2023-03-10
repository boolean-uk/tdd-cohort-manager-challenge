const Cohort = require('./Cohort.js')

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

  searchCohort(name) {
    let result
    this.cohortsList.forEach((element) => {
      if (element.getName() === name) {
        result = element
      }
    })
    return result
  }
}

module.exports = CohortManager
