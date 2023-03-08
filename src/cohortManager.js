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
}

class Cohort {
  constructor(nameCohort) {
    this.IDCohort = 0
    this.nameCohort = nameCohort
    this.maxStudents = 24
    this.studentsInCohort = []
  }
}

module.exports = {
  CohortManager,
  Cohort
}

// const cohortManager = new CohortManager()
// cohortManager.createCohort('nameCohort')
// cohortManager.createCohort('Frontend')

// console.log(cohortManager.cohorts)
