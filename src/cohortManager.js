class CohortList {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    const newCohort = {
      cohortName: 'Cohort1',
      students: []
    }
    this.cohorts.push(cohortName)
    console.log(newCohort)
    return newCohort
  }
}

module.exports = CohortList
