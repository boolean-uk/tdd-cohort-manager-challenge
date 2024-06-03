class Cohort {
  constructor(name) {
    this.cohortName = name
  }
}

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  create(name) {
    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
    return newCohort
  }

  search(name) {
    const found = this.cohorts.find((c) => c.cohortName === name)

    if (!found) {
      // eslint-disable-next-line no-throw-literal
      throw 'Cohort not found'
    }
    return found
  }
}

export { Cohort }

export default CohortManager
