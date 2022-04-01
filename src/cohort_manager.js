const Cohorts = require('./cohorts.js')
const Student = require('./student.js')

class CohortManager {
  constructor () {
    this.cohortList = []
    this.studentId = 1
    this.cohortsWithStudents = []
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
    const newStudent = new Student(this.studentId, studentName, gitHub, email)
    let updatedCohort
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohortName) {
        this.cohortList[i].students.push(newStudent)
        this.studentId++
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

  findCohortsWithStudents () {
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].students.length === 0) {
        continue
      }
      if (this.cohortList[i].students.length !== 0) {
        this.cohortsWithStudents.push(this.cohortList[i])
      }
    }
    return this.cohortsWithStudents
  }

  searchByID (id) {
    for (let i = 0; i < this.cohortList.length; i++) {
      for (let d = 0; d < this.cohortList[i].students.length; d++) {
        const student = this.cohortList[i].students[d]
        if (student.id === id) {
          return student
        }
      }
    }
    return 'NO STUDENT FOUND'
  }
}

module.exports = CohortManager
