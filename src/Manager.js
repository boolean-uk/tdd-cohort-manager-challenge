import Cohort from './cohort'

class Manager {
  constructor() {
    this.cohorts = []
    this.studentId = 1
  }

  addCohort(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new Error("Please provide a valid name, e.g., 'cohort 6'")
    }

    const isDuplicate = this.cohorts.some(
      (cohort) => cohort.name === cohortName
    )

    if (!isDuplicate) {
      const newCohort = new Cohort(cohortName)
      this.cohorts.push(newCohort)

      return this.findCohortByName(cohortName)
    } else {
      return `${cohortName} already exists there`
    }
  }

  findCohortByName(cohortName) {
    return this.cohorts.find((cohort) => cohort.name === cohortName)
  }
}
export default Manager
