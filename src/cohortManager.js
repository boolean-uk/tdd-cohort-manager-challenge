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
    // .some() is comparing the class objects in this.cohorts if it includes the property
    // I couldn't use .includes() as it only compares the references of objects
    if (!this.cohorts.some((obj) => obj.cohortName === cohortName)) {
      return null
    } else {
      const filteredCohorts = this.cohorts.filter(
        (element) => element.cohortName !== cohortName
      )
      this.cohorts = filteredCohorts
      return true
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
