const Cohort = require('./cohort.js')

class CohortManager {
  constructor () {
    this.cohorts = []
    this.studentID = 1
  }

  addCohort (cohortName) {
    if (this.cohortFinder(cohortName).length > 0) {
      throw new Error('There is already a cohort with the same name')
    }

    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
  }

  removeCohort (cohortName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      if (cohort.checkCohortName(cohortName)) {
        this.cohorts.splice(i, 1)
        return 'Removed'
      }
    }
    throw new Error('Cohort does not exist')
  }

  studentFinder (github, email) {
    if (this.searchByProperty('github', github).length > 0 ||
    this.searchByProperty('email', email).length > 0) {
      return true
    }
    return false
  }

  addStudent (cohortName, first, last, github, email) {
    const cohort = this.cohortFinder(cohortName)
    const cohortInstance = cohort[0]

    if (this.studentFinder(github, email)) {
     throw new Error('This student already part of a cohort')
    }

    if (cohort.length === 0) {
      throw new Error ('Cohort does not exist')
    }

    if (cohortInstance.students.length >= 24) {
      throw new Error('Cohort is full')
    }

    cohortInstance.addStudentToCohort(this.studentID, first, last, github, email)
    this.studentID++
    return 'Student Added'
  }

  removeStudent (cohortName, id) {
    const cohort = this.cohortFinder(cohortName)
    const cohortInstance = cohort[0]

    if (cohort.length === 0) {
      throw new Error ('Cohort does not exist')
    }

    if (this.searchByProperty('id', id).length === 0) {
      throw new Error('Student ID not found')
    }

    cohortInstance.removeStudentFromCohort(id)
    return 'Student Removed'
  }

  cohortFinder (cohortName) {
    return this.cohorts.filter(cohort => cohort.checkCohortName(cohortName))
  }

  searchByCohort (cohortName) {
    return this.cohortFinder(cohortName).length > 0
      ? this.cohortFinder(cohortName)[0]
      : 'Cohort does not exist'
  }

  searchByProperty (property, value) {
    const studentsWithThisProperty = []

    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      for (let j = 0; j < cohort.students.length; j++) {
        const student = cohort.students[j]
        if (student[property] === value) {
          studentsWithThisProperty.push(student)
        }
      }
    }
    return studentsWithThisProperty
  }

  searchByID (id) {
    return this.searchByProperty('id', id).length > 0
      ? this.searchByProperty('id', id)[0]
      : 'Student ID not found'
  }

  searchStudentsByFirstname (first) {
    return this.searchByProperty('firstname', first)
  }

  searchStudentsByLastname (last) {
    return this.searchByProperty('lastname', last)
  }
}

module.exports = CohortManager
