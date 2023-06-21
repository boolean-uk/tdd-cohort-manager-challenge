class CohortManager {
  constructor() {
    this.cohortList = []
  }

  addCohort(cohortName) {
    const cohortObj = {
      cohortName: cohortName,
      students: []
    }
    this.cohortList.push(cohortObj)
    return true
  }
}

module.exports = CohortManager
