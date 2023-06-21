class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  addCohort(name) {
    this.id++
    const cohort = {
      id: this.id,
      cohortName: name,
      students: []
    }
    this.cohorts.push(cohort)
    return cohort
  }

  searchByCohortName(cohortName) {
    const cohort = this.cohorts.find((item) => item.cohortName === cohortName)
    if (cohort === undefined) throw new Error('Cohort was not found')
    return true
  }
}

module.exports = CohortManager
