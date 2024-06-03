class CohortList {
  constructor() {
    this.cohorts = []
  }

  add(cohortName) {
    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)

    return newCohort
  }

  search(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    return found
  }
}

class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
  }
}

export { Cohort }
export default CohortList
