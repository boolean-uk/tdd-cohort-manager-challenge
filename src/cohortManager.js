const Cohort = require('./cohort')

class CohortManager {
  constructor(students, cohorts) {
    this.students = students
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
    let cohortIndex
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].cohortName === cohortName) {
        cohortIndex = i
      }
    }
    console.log('OBJ --> ', cohortIndex)

    console.log(
      'I prefer book indexes --> ',
      this.cohorts[cohortIndex].addStudent(studentId)
    )
  }

  getCohorts() {
    return this.cohorts
  }

  getStudents() {
    return this.students
  }
}

module.exports = CohortManager
