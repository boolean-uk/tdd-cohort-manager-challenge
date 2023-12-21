class FileManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohort) {
    this.cohorts.push(cohort)
  }

  removeCohortByName(name) {
    const locatedCohort = this.cohorts.find(
      (cohort) => cohort.CohortName === name
    )
    if (!locatedCohort) {
      throw new Error('This cohort does not exist')
    }
    return locatedCohort
  }

  findCohortByName(name) {
    const locatedCohort = this.cohorts.find(
      (cohort) => cohort.CohortName === name
    )
    if (!locatedCohort) {
      throw new Error('This cohort does not exist')
    }
    return locatedCohort
  }
}

export default FileManager
