const Cohort = require('./Cohort.js')
const Student = require('./Student.js')

class CohortManager {
  constructor() {
    this.cohortList = []
    this.studentId = 1
  }

  createCohort(name) {
    this.#checkType(name, 'string', 'must search for a string')

    const { ...newCohort } = new Cohort(name)
    this.cohortList.push(newCohort)
    return this.cohortList
  }

  searchForCohort(searchQuery) {
    this.#checkType(searchQuery, 'string', 'must search for a string')

    const searchResult = this.#findCohort(searchQuery.toLowerCase())

    if (searchResult) {
      return searchResult
    }
    throw new Error('no match found')
  }

  removeCohort(cohortName) {
    this.#checkType(cohortName, 'string', 'must be a string')

    const cohortToRemove = this.#findCohort(cohortName.toLowerCase())
    this.#throwErrorIfUndefined(cohortToRemove)

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
    this.#checkType(student, 'object', `student must be an object`)
    this.#checkType(cohortName, 'string', `must be a string`)

    const cohortToAddStudentTo = this.#findCohort(cohortName.toLowerCase())
    this.#throwErrorIfUndefined(cohortToAddStudentTo)

    const indexOfCohortToAddStudentTo =
      this.cohortList.indexOf(cohortToAddStudentTo)
    this.cohortList[indexOfCohortToAddStudentTo].studentList.push(student)
    return `${student.firstName} added to ${cohortToAddStudentTo.name} successfully`
  }

  removeStudentFromCohort(student, cohortName) {
    this.#checkType(student, 'object', `student must be an object`)
    this.#checkType(cohortName, 'string', `must be a string`)

    const cohortToRemoveStudentFrom = this.#findCohort(cohortName.toLowerCase())
    this.#throwErrorIfUndefined(cohortToRemoveStudentFrom)

    const indexOfCohortToRemoveStudentFrom = this.cohortList.indexOf(
      cohortToRemoveStudentFrom
    )

    const studentToRemoveFromCohort = this.#findStudent(cohortName, student)
    this.#throwErrorIfUndefined(studentToRemoveFromCohort)

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

  #throwErrorIfUndefined(searchResult) {
    if (searchResult === undefined) {
      throw new Error('no match found')
    }
  }

  #checkType(input, type, errorMsg) {
    // eslint-disable-next-line valid-typeof
    if (typeof input !== type) {
      throw new TypeError(errorMsg)
    }
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
