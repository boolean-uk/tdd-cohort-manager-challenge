const Cohort = require('./cohort')
const students = require('../src/students')

class CohortManager {
  constructor(cohorts) {
    this.cohorts = cohorts
  }

  createCohort(cohortName) {
    const newCohortObj = new Cohort(cohortName).newCohort()
    this.cohorts.push(newCohortObj)
    return true
  }

  removeCohort(cohortName) {
    if (this.cohorts.find((obj) => obj.cohortName === cohortName)) {
      const filteredCohorts = this.cohorts.filter(
        (element) => element.cohortName !== cohortName
      )
      this.cohorts = filteredCohorts
      return true
    } else {
      // Return null if cohort cannot be found
      return null
    }
  }

  searchForCohort(cohortName) {
    const cohortObj = this.cohorts.find((obj) => obj.cohortName === cohortName)

    if (cohortObj === undefined) {
      return null
    } else {
      return cohortObj
    }
  }

  addStudentToCohort(cohortName, studentId) {
    const cohortObj = this.searchForCohort(cohortName)
    const studentObj = students.find((obj) => obj.studentID === studentId)

    if (cohortObj && studentObj) {
      cohortObj.students.push(studentObj)
      return true
    } else {
      return null
    }
  }

  removeStudentFromCohort(cohortName, studentId) {
    const cohortObj = this.searchForCohort(cohortName)
    const findStudent = cohortObj.students.find(
      (obj) => obj.studentID === studentId
    )

    if (cohortObj && findStudent) {
      const index = cohortObj.students.indexOf(findStudent)
      cohortObj.students.splice(index, 1)
      return true
    } else {
      return null
    }
  }

  getCohorts() {
    return this.cohorts
  }
}

module.exports = CohortManager
