const Cohorts = require('./cohorts.js')
const Student = require('./student.js')

class CohortManager {
  constructor () {
    this.cohortList = []
  }

  createCohort (cohortName) {
    const cohortToAdd = new Cohorts(cohortName)
    this.cohortList.push(cohortToAdd)
    return this.cohortList
  }

  searchByCohortName (cohortName) {
    let cohortFound = false
    let cohort
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohortName) {
        cohortFound = true
        cohort = this.cohortList[i]
        break
      }
    }
    if (cohortFound === false) {
      return 'COHORT NOT FOUND'
    }
    return cohort
  }

  addStudent (cohortName, studentName, gitHub, email) {
    const newStudent = new Student(studentName, gitHub, email)
    let updatedCohort
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohortName) {
        this.cohortList[i].students.push(newStudent)
        updatedCohort = this.cohortList[i]
      }
    }
    return updatedCohort
  }

  removeCohort (cohortName) {
    let cohortFound = false
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohortName) {
        this.cohortList.splice(i, 1)
        cohortFound = true
        return this.cohortList
      }
    }
    if (cohortFound === false) {
      return 'NOT A VALID COHORT NAME'
    }
  }

  findCohort (cohort) {
    let foundCohort = null
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohort) {
        foundCohort = this.cohortList[i]
      }
    }
    return foundCohort
  }

  removeStudent (cohort, student) {
    const theCohort = this.findCohort(cohort)
    if (theCohort === null) {
      return 'COHORT NOT FOUND'
    } else {
      for (let i = 0; i < theCohort.students.length; i++) {
        if (theCohort.students[i].firstName === student) {
          theCohort.students.splice(i, 1)
          return theCohort
        }
      }
    }
  }
}

module.exports = CohortManager
