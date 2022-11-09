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
    console.log(this.studentId)
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

  #findCohort(searchQuery) {
    return this.cohortList.find((cohort) =>
      cohort.name.toLowerCase().includes(searchQuery)
    )
  }
}

const testManager = new CohortManager()
testManager.createCohort('Cohort 7')
const newStudent = testManager.createStudent(
  'Nathan',
  'King',
  'vherus',
  'hello@gmail.com'
)
const newStudent2 = testManager.createStudent(
  'Alex',
  'Lind',
  'vherus',
  'hello@gmail.com'
)
console.log(testManager.addStudentToCohort(newStudent, 'Cohort 7'))
console.log(testManager.addStudentToCohort(newStudent2, 'Cohort 7'))
console.log(testManager.cohortList[0])

module.exports = CohortManager
