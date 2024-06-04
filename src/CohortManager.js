export default class CohortManager {
  constructor(cohorts = []) {
    this.cohorts = cohorts
  }

  searchName(name) {
    for (let cohort of this.cohorts) {
      if (cohort.name === name) {
        return cohort.name
      }
    }
  }
  removeCohort(name) {
    const index = this.cohorts.findIndex((cohort) => cohort.name === name)
    if (index !== -1) {
      this.cohorts.splice(index, 1)
    }
  }
}
