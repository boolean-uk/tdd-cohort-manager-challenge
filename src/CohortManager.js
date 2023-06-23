class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const cohort = {
      cohortName: name,
      students: []
    }
    this.cohorts.push(cohort)
    return cohort
  }

  getCohortByName(name) {
    return this.cohorts.find((cohort) => cohort.cohortName === name)
  }

  addStudentToCohort(student, cohortName) {
    const cohort = this.getCohortByName(cohortName)
    if (cohort) {
      cohort.students.push(student)
    }
  }

  removeStudentFromCohort(students, cohortName) {
    const cohort = this.getCohortByName(cohortName)
    if (cohort) {
      cohort.students = cohort.students.filter(
        (student) => students !== student
      )
    }
  }
}

module.exports = CohortManager
