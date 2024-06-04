class CohortManager {
  createCohort(name) {
    return new Cohort('Class of 24')
  }
}

// eslint-disable-next-line prettier/prettier
class Cohort {
  constructor(name) {
    this.name = name
  }
}
export { Cohort }
export default CohortManager
