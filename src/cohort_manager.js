import Student from './student.js'
import Cohort from './cohorts.js'

class CohortManager {
  constructor() {
    this.cohortsList = []
  }

  createCohort(name) {
    const newCohort = new Cohort(name)
    this.cohortsList.push(newCohort)
  }
}

export default CohortManager

const nm = new CohortManager
nm.createCohort(1)
console.log(nm);