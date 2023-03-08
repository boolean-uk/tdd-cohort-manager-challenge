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
    const cohort = this.cohorts.find(
      (cohort) => cohort.nameCohort === nameCohort
    )

    if (cohort === undefined) throw new Error('Cohort not found')

    return [cohort]
  }

  deleteCohort(nameCohort) {
    const cohort = this.cohorts.find(
      (cohort) => cohort.nameCohort === nameCohort
    )
    const removedCohort = (cohort) => cohort.nameCohort === nameCohort
    const index = this.cohorts.findIndex(removedCohort)

    if (index === -1) {
      throw new Error('Cohort not found')
    } else if (cohort.nameCohort === nameCohort) {
      this.cohorts.splice(index, 1)
      return this.cohorts
    }
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

// const manager = new CohortManager()

// manager.createCohort('nameCohort')
// manager.searchCohort('nameCohort')
