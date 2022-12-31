const Cohort = require('../src/Cohort.js')

class CohortManager {
  constructor() {
    this.cohortList = []
  }

  createCohort(name) {
    this.cohortList.push(new Cohort(name))
    return this.cohortList
  }

  searchCohort(name) {
    for (const cohort of this.cohortList) {
      if (cohort.cohortName === name) {
        return cohort
      }
    }
    return 'Error : No cohort found!'
  }

  removeCohort(name) {
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].cohortName === name) {
        this.cohortList.splice(i, 1)
        return 'This cohort has been removed: ' + name
      }
    }
    return 'Error : Cohort does not exist'
  }

  addStudentToCohort(name, student) {
    const cohort = this.searchCohort(name)
    cohort.studentList.push(student)
  }

  findStudent(name, id) {
    const cohort = this.searchCohort(name)
    for (let i = 0; i < cohort.studentList.length; i++) {
      if (id === cohort.studentList[i].studentID) {
        return cohort.studentList[i]
      }
    }
  }

  removeStudent(name, id) {
    const cohort = this.searchCohort(name)
    const student = this.findStudent(name, id)
    if (student) {
      cohort.studentList.splice(cohort.studentList.indexOf(student), 1)
      return `Student ID ${id} has been removed from cohort`
    }
    return 'student not found'
  }
}

module.exports = CohortManager
