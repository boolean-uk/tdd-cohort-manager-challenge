/* eslint-disable no-throw-literal */
class CohortList {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohortName) {
    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)

    return newCohort
  }

  searchCohort(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    if (!found) {
      throw 'cohort not found'
    }

    return found
  }

  removeCohort(cohortName) {
    const found = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )

    const foundIndex = this.cohorts.findIndex(
      (cohort) => cohort.cohortName === cohortName
    )

    if (foundIndex >= 0 && found) {
      this.cohorts.splice(foundIndex, 1)
    }

    if (!found) {
      throw 'cohort not found'
    }

    return found
  }
}

class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
  }
}

class Student {}

export { Cohort, Student }
export default CohortList
