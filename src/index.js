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
    return newCohort
  }
}

export { Cohort }

export default CohortManager
