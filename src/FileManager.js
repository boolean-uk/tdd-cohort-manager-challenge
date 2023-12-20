class FileManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohort) {
    this.cohorts.push(cohort)
  }

  removeCohortByName(name) {
    this.cohorts = this.cohorts.filter((cohort) => cohort.CohortName !== name)
  }

  findCohortByName(name) {
    return this.cohorts.find((cohort) => cohort.CohortName === name)
  }
}

export default FileManager
