class CohortManager {
  constructor() {
    this.cohortList = []
    this.cohortID = 1
  }

  createCohort(cohortName) {
    const newCohort = new Cohort(this.cohortID++, cohortName)
    this.cohortList.push(newCohort)
    return this.cohortList
  }
}

class Cohort {
  constructor(cohortID, cohortName) {
    this.cohortID = cohortID
    this.cohortName = cohortName
  }
}

export { Cohort }
export default CohortManager
