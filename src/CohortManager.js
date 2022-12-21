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

  isCohortFull(cohortID) {
    const cohort = this.searchCohortByID(cohortID)
    if (!cohort) return false

    const cohortIndex = this.cohorts.indexOf(cohort)
    if (this.cohorts[cohortIndex].students.length >= 24) return true
    return false
  }

  searchCohortByID(cohortID) {
    const cohort = this.cohorts.find((cohort) => cohort.cohortID === cohortID)
    return cohort || false
  }

  searchStudentByID(studentID) {
    const student = this.students.find(
      (student) => student.studentID === studentID
    )
    return student || false
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

  createStudent(firstName, lastName, email, githubUser) {
    if (!this.isStudentEmailUnique(email)) return false

    const uniqueID = this.getUniqueStudentID()
    this.students.push(
      new Student().create(firstName, lastName, email, githubUser, uniqueID)
    )
    return true
  }

  updateStudent(studentID, newCohortID) {
    // If full, return
    if (this.isCohortFull(newCohortID)) return false

    const student = this.searchStudentByID(studentID)
    const newCohort = this.searchCohortByID(newCohortID)

    // If student Id or cohort Id does not exist, return
    if (!student || !newCohort) return false

    // Remove from OLD cohort
    if (student.cohortID != null) {
      const oldCohort = this.searchCohortByID(student.cohortID)
      const oldCohortIndex = this.cohorts.indexOf(oldCohort)
      const studentOldIndex =
        this.cohorts[oldCohortIndex].students.indexOf(student)
      this.cohorts[oldCohortIndex].students.splice(studentOldIndex, 1)
    }

    // Add to NEW cohort
    const newCohortIndex = this.cohorts.indexOf(newCohort)
    const studentIndex = this.students.indexOf(student)
    this.cohorts[newCohortIndex].students.push(student)

    this.students[studentIndex].cohortID = newCohortID
    return true
  }
}

module.exports = { CohortManager }
