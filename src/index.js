class CohortList {
  constructor() {
    this.cohorts = []
  }

  add(cohortName) {
    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)

    return newCohort
  }
}

class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
  }
}

export { Cohort }
export default CohortList
