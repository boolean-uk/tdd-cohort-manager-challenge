class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(name) {
    this.cohorts.push(name)
    return `${name} created`
  }
}

module.exports = { CohortManager }
