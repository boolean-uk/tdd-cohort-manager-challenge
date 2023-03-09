class Cohort {
  createCohort(name, ID) {
    const cohort = {
      cohortID: ID,
      name: name,
      students: []
    }
    return cohort
  }
}

class Manager {
  constructor() {
    this.cohorts = []
    this.students = []
  }

  createNewCohort(name) {
    this.cohorts.push(new Cohort().createCohort(name, this.cohorts.length + 1))
  }
}

module.exports = { Cohort, Manager }
