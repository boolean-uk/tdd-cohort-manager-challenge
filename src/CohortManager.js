class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  createCohort(str) {
    const cohort = {
      name: str,
      students: []
    }
    if (this.findCohortBy(str) === true) {
      throw new Error('A cohort with this name already exists')
    }
    this.cohorts.push(cohort)
    return cohort
  }

  findCohortBy(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    if (cohort === undefined) return false
    return true
  }

  getAllCohorts() {
    return this.cohorts
  }
}

module.exports = CohortManager
