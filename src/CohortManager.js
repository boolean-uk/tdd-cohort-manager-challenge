export default class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(cohortName) {
    this.cohorts.push({
      name: cohortName,
      students: []
    })
  }

  getCohort(cohortName) {
    return this.cohorts.find((cohort) => cohort.name === cohortName)
  }

  removeCohort(cohortName) {
    if (!this.getCohort(cohortName)) {
      throw new Error(`Cohort ${cohortName} not found`)
    }
    this.cohorts = this.cohorts.filter((cohort) => cohort.name !== cohortName)
  }

  addStudentToCohort(student, cohortName) {
    const cohort = this.getCohort(cohortName)
    if (!cohort) {
      throw new Error(`Cohort ${cohortName} not found`)
    }
    cohort.students.push(student)
  }

  removeStudentFromCohort(student, cohortName) {
    const cohort = this.getCohort(cohortName)
    if (!cohort) {
      throw new Error(`Cohort ${cohortName} not found`)
    }
    cohort.students = cohort.students.filter((s) => s !== student)
  }
}
