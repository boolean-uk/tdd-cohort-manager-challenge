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
    if (this.searchForCohort(cohortName)) {
      const filteredCohorts = this.cohorts.filter(
        (element) => element.cohortName !== cohortName
      )
      this.cohorts = filteredCohorts
      return true
    }
    // This is redundant because searchForCohort is handling this error message
    /* else {
      throw new Error('Cohort not found')
    } */
  }

  searchForCohort(cohortName) {
    const cohortObj = this.cohorts.find((obj) => obj.cohortName === cohortName)

    if (cohortObj) {
      return cohortObj
    } else {
      throw new Error('Cohort not found')
    }
  }

  addStudentToCohort(cohortName, studentId) {
    const cohortObj = this.searchForCohort(cohortName)
    const studentObj = students.find((obj) => obj.studentID === studentId)

    if (studentObj) {
      cohortObj.students.push(studentObj)
      return true
    } else {
      throw new Error('Student not found')
    }
  }

  removeStudentFromCohort(cohortName, studentId) {
    const cohortObj = this.searchForCohort(cohortName)
    const findStudent = cohortObj.students.find(
      (obj) => obj.studentID === studentId
    )

    if (findStudent) {
      const index = cohortObj.students.indexOf(findStudent)
      cohortObj.students.splice(index, 1)
      return true
    } else {
      throw new Error('Student not found')
    }
  }

  getCohorts() {
    return this.cohorts
  }
}

module.exports = CohortManager
