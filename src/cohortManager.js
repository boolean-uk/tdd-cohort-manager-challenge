class CohortManager {
  constructor () {
    this.cohortList = []
  }

  add (newCohort) {
    this.cohortList.push(newCohort)
  }

  search (cohortName) {
    for (const cohort of this.cohortList) {
      if (cohort.name === cohortName) return cohort
    }
    return Error('this cohort do not exist')
  }

  remove (cohortName) {
    for (const cohort of this.cohortList) {
      if (cohort.name === cohortName) return this.cohortList.filter((cohort) => cohort.name !== cohortName)
    }
    return Error('this cohort do not exist')
  }
}

module.exports = CohortManager
