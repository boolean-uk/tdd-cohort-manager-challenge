class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  search(name) {
    const found = this.cohorts.find((Cohort) => Cohort.name === name)

    return found
  }
}

// eslint-disable-next-line prettier/prettier
    class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.studentID = 1
  }
}
export { Cohort }
export default CohortManager
