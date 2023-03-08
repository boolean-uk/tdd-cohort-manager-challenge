class CohortManager {
  constructor() {
    this.students = []
    this.cohorts = []
    this.IDCount = 0
  }

  createCohort(nameCohort) {
    this.IDCount += 1
    const cohort = new Cohort()
    cohort.nameCohort = nameCohort
    cohort.IDCohort = this.IDCount
    this.cohorts.push(cohort)
  }

  searchCohort(nameCohort) {
    return this.cohorts.filter((cohort) => cohort.nameCohort === nameCohort)
  }
}

class Cohort {
  constructor(nameCohort) {
    this.IDCohort = CohortManager.IDCount
    this.nameCohort = nameCohort
    this.maxStudents = 24
    this.studentsInCohort = []
  }
}

module.exports = {
  CohortManager,
  Cohort
}

const newCohortManager = new CohortManager()
newCohortManager.createCohort('Frontend Cohort')
newCohortManager.createCohort('Backend Cohort')

newCohortManager.searchCohort('Backend Cohort')
// console.log(newCohortManager.cohorts)
