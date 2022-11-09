/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const Cohort = require('./Cohort')
const Student = require('./Cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
  }

  addCohort(name) {
    const regex = /^[A-Za-z0-9 ]*$/
    if (name === '') {
      return 'invalid name'
    }
    if (regex.test(name)) {
      const newCohort = new Cohort(name)
      const selectedName = []

      this.cohorts.push(newCohort)

      this.cohorts.find((element) => {
        if (element.name === name) {
          selectedName.push(element)
        }
      })
      return selectedName.length ? 'cohort already exist' : this.cohorts
    }
    return 'invalid name'
  }

  searchByName(list, name) {
    const selectedName = []
    list.find((element) => {
      if (element.name === name) {
        selectedName.push(element)
      }
    })
    return selectedName.length ? 'cohort already exist' : this.cohorts
  }
}

module.exports = CohortManager
