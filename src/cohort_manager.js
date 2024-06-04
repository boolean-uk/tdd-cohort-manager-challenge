import Student from './student.js'
import Cohort from './cohorts.js'

class CohortManager {
  constructor() {
    this.cohortsList = []
  }

  createCohort(name) {
    const newCohort = new Cohort(name)
    const allreadyCreated = this.cohortsList.find((co) => co.name === name)
    if (allreadyCreated) {
      process.stdout.write('A cohort with this name already exists\n')
      throw new Error('A cohort with this name already exists\n')
    } else this.cohortsList.push(newCohort)
  }
}

export default CohortManager

const nm = new CohortManager()
nm.createCohort(1)
console.log(nm)
