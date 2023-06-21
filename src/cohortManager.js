class CohortDetainment {
  constructor() {
    this.cohortManager = []
  }

  createCohort(cohortName) {
    const newCohort = { [cohortName]: [] }
    this.cohortManager.push(newCohort)
    return newCohort
  }

  searchForCohort(cohortName) {
    const resultOfFind = this.cohortManager.find((obj) =>
      obj.hasOwnProperty(cohortName)
    )
    return resultOfFind
  }
}

module.exports = CohortDetainment
