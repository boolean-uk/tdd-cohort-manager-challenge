export default class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(name) {
    this.cohorts.push({
      name: name,
      students: []
    })
  }

  searchCohort(name) {
    return this.cohorts.find((cohort) => cohort.name === name)
  }

  addStudent(name, student) {
    const cohort = this.searchCohort(name)
    if (cohort === undefined) {
      throw new Error(`Cohort with name ${name} not found`)
    }

    cohort.students.push(student)
  }

  removeCohort(name) {
    this.cohorts = this.cohorts.filter((cohort) => cohort.name !== name)
  }

  removeStudent(name, studentId) {
    const cohort = this.searchCohort(name)
    if (cohort !== undefined) {
      cohort.students = cohort.students.filter(
        (student) => student.id !== studentId
      )
    } else {
      throw new Error(`Cohort with id ${studentId} not found`)
    }
  }
}
