class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(name) {
    this.cohorts.push(name)
    return `${name} created`
  }

  searchCohort(name) {
    const findCohort = this.cohorts.find((cohortName) => cohortName === name)
    return findCohort !== undefined ? `${name} found` : `${name} does not exist`
  }
}

module.exports = { CohortManager }
