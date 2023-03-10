const Cohort = require('./Cohort.js')

class CohortManager {
  constructor() {
    this.cohortsList = []
    this.studentsList = []
  }

  createCohort(name) {
    this.cohortsList.push(new Cohort(name))
  }

  getAllCohorts() {
    return this.cohortsList
  }

  searchCohort(name) {
    let result
    this.cohortsList.forEach((element) => {
      if (element.getName() === name) {
        result = element
      }
    })
    return result
  }

  addStudentToCohort(firstName, lastName, username, email, cohortName) {
    this.searchCohort(cohortName).addStudent(
      firstName,
      lastName,
      username,
      email
    )
  }

  removeCohort(name) {
    const i = this.cohortsList.findIndex((cohort) => cohort.name === name)
    this.cohortsList.splice(i, 1)
  }

  removeStudentFromCohort(studentID, cohortName) {
    const cohort = this.searchCohort(cohortName)
    cohort.removeStudent(studentID)
  }
}

module.exports = CohortManager
