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
}
