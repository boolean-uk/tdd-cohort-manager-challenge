class Cohorts {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
  }
}

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.idCounter = 1
  }
}

export default Cohorts

export { Cohort }
