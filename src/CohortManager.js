const { Cohort } = require('../src/Cohort')

class CohortManager {
  constructor() {
    this.cohortList = []
    this.studentList = []
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohortList.push(cohort)

    return cohort
  }

  searchCohorts(cohortName) {
    const found = this.cohortList.find((cohort) => cohort.name === cohortName)

    if (!found) throw new Error('No cohorts found!')

    return found
  }
}

// const cohortManager = new CohortManager()
// const test = cohortManager.createCohort('Cohort 1')
// const test2 = cohortManager.createCohort('Cohort 2')
// const test3 = cohortManager.createCohort('Cohort 3')

module.exports = { CohortManager }
