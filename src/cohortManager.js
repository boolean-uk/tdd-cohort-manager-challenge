class CohortManager {
  constructor () {
    this.cohort = []
  }

  createCohort (_cohortName) {
    const cohortObject = {
      cohortName: _cohortName,
      students: []
    }

    this.cohort.push(cohortObject)
    return cohortObject
  }

  searchCohort (_cohortName) {
    for (let i = 0; i < this.cohort.length; i++) {
      if (this.cohort[i].cohortName === _cohortName) {
        return this.cohort[i]
      }
    }
    return 'Error cohort not found'
  }

  removeCohort (_cohortName) {
    for (let i = 0; i < this.cohort.length; i++) {
      if (this.cohort[i].cohortName === _cohortName) {
        this.cohort.splice(i, 1)
        return 'This cohort has been removed: ' + _cohortName
      }
    }
  }

  addStudentToCohort (_cohortName, student) {
    const cohort = this.searchCohort(_cohortName)
    cohort.students.push(student)
  }

  findStudent (_cohortName, studentID) {
    const cohort = this.searchCohort(_cohortName)
    for (let i = 0; i < cohort.students.length; i++) {
      if (studentID === cohort.students[i].studentID) {
        return cohort.students[i]
      }
    }
  }

  removeStudent (_cohortName, studentID) {
    const cohort = this.searchCohort(_cohortName)
    const student = this.findStudent(_cohortName, studentID)
    cohort.students.splice(cohort.students.indexOf(student), 1)
    return `Student removed ${studentID}`
  }
}

module.exports = CohortManager
