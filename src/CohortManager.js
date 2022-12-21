const { Cohort } = require('./Cohort')
const { Student } = require('./Student')

class CohortManager {
  constructor() {
    this.students = []
    this.cohorts = []
  }

  isCohortNameUnique(cohortName) {
    const found = this.cohorts.find((cohort) => cohort.name === cohortName)
    return !found
  }

  isStudentEmailUnique(studentEmail) {
    const found = this.students.find(
      (student) => student.email === studentEmail
    )
    return !found
  }

  isCohortFull() {
    if (this.cohorts.length >= 24) return true
    return false
  }

  getUniqueCohortID() {
    if (this.cohorts.length === 0) return 1

    const uniqueID = this.cohorts[this.cohorts.length - 1].cohortID + 1
    return uniqueID
  }

  getUniqueStudentID() {
    if (this.students.length === 0) return 1

    const uniqueID = this.students[this.students.length - 1].studentID + 1
    return uniqueID
  }

  createCohort(name) {
    if (!this.isCohortNameUnique(name)) return false

    const uniqueID = this.getUniqueCohortID()
    this.cohorts.push(new Cohort().create(name, uniqueID))
    return true
  }

  // if (this.isCohortFull()) return false
  createStudent(firstName, lastName, email, githubUser) {
    if (!this.isStudentEmailUnique(email)) return false

    const uniqueID = this.getUniqueStudentID()
    this.students.push(
      new Student().create(firstName, lastName, email, githubUser, uniqueID)
    )
    return true
  }
}

module.exports = { CohortManager }
