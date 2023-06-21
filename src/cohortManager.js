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

  searchCohort(cohortName) {
    if (this.cohortList.find((cohort) => cohort.cohortName === cohortName)) {
      console.log(
        'Cohort Search Results:',
        this.cohortList.find((cohort) => cohort.cohortName === cohortName)
      )
      return true
    } else {
      console.error('Cohort does not exist')
      return false
    }
  }
}

module.exports = CohortManager
