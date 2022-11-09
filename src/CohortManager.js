const Cohort = require('./Cohort.js')
const Student = require('./Student.js')

class CohortManager {
  constructor() {
    this.cohortList = []
    this.studentId = 1
  }

  createCohort(name) {
    if (typeof name !== 'string') {
      throw new TypeError(`${name} must be a string`)
    }
    const { ...newCohort } = new Cohort(name)
    this.cohortList.push(newCohort)
    return this.cohortList
  }

  searchForCohort(searchQuery) {
    if (typeof searchQuery !== 'string') {
      throw new TypeError(
        `${searchQuery} is not a string, must search for a string`
      )
    }
    const searchResult = this.#findCohort(searchQuery.toLowerCase())

    if (searchResult) {
      return searchResult
    }
    throw new Error('no match found')
  }

  removeCohort(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new TypeError(`must be a string`)
    }
    const cohortToRemove = this.#findCohort(cohortName.toLowerCase())
    if (cohortToRemove === undefined) {
      throw new Error('no match found')
    }
    const indexOfCohortToRemove = this.cohortList.indexOf(cohortToRemove)
    this.cohortList.splice(indexOfCohortToRemove, 1)
    return 'Removed successfully'
  }

  createStudent(firstName, lastName, gitHubUsername, email) {
    const { ...newStudent } = new Student(
      this.studentId,
      firstName,
      lastName,
      gitHubUsername,
      email
    )
    this.studentId++
    return newStudent
  }

  addStudentToCohort(student, cohortName) {
    if (typeof student !== 'object') {
      throw new TypeError(`student must be an object`)
    }
    if (typeof cohortName !== 'string') {
      throw new TypeError(`must be a string`)
    }

    const cohortToAddStudentTo = this.#findCohort(cohortName.toLowerCase())
    if (cohortToAddStudentTo === undefined) {
      throw new Error('Cohort not found')
    }
    const indexOfCohortToAddStudentTo =
      this.cohortList.indexOf(cohortToAddStudentTo)
    this.cohortList[indexOfCohortToAddStudentTo].studentList.push(student)
    return `${student.firstName} added to ${cohortToAddStudentTo.name} successfully`
  }

  removeStudentFromCohort(student, cohortName) {
    if (typeof student !== 'object') {
      throw new TypeError(`student must be an object`)
    }
    if (typeof cohortName !== 'string') {
      throw new TypeError(`must be a string`)
    }

    const cohortToRemoveStudentFrom = this.#findCohort(cohortName.toLowerCase())
    if (cohortToRemoveStudentFrom === undefined) {
      throw new Error('Cohort not found')
    }

    const indexOfCohortToRemoveStudentFrom = this.cohortList.indexOf(
      cohortToRemoveStudentFrom
    )

    const studentToRemoveFromCohort = this.#findStudent(cohortName, student)
    if (studentToRemoveFromCohort === undefined) {
      throw new Error('student does not exist')
    }

    const indexOfStudent = this.cohortList[
      indexOfCohortToRemoveStudentFrom
    ].studentList.indexOf(studentToRemoveFromCohort)

    this.cohortList[indexOfCohortToRemoveStudentFrom].studentList.splice(
      indexOfStudent,
      1
    )

    return `${studentToRemoveFromCohort.firstName} removed from ${this.cohortList[indexOfCohortToRemoveStudentFrom].name} successfully`
  }

  #findCohort(searchQuery) {
    return this.cohortList.find((cohort) =>
      cohort.name.toLowerCase().includes(searchQuery)
    )
  }

  #findStudent(cohortName, student) {
    const cohortIndex = this.cohortList.indexOf(
      this.#findCohort(cohortName.toLowerCase())
    )
    return this.cohortList[cohortIndex].studentList.find(
      (arrItem) => arrItem === student
    )
  }
}

module.exports = CohortManager
