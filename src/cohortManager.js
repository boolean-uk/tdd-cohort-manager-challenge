class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.idCounter = 0
  }

  createCohort(name) {
    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
    return this.cohorts
  }

  findCohort(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    return cohort === undefined ? `No cohort with this name` : cohort
  }
}

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.capacity = 24
  }
}

class Student {}

module.exports = {
  CohortManager,
  Cohort,
  Student
}
