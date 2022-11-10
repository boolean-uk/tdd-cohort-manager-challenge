const Cohort = require('./Cohort.js')
const Student = require('./Student.js')

class CohortManager {
  constructor() {
    this.cohortList = []
    this.studentId = 1
  }

  createCohort(name) {
    this.#checkType(name, 'string', 'must search for a string')
    this.#checkForEmptyNameAndDuplicates(name)
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
    this.#checkIfStudentIsInOtherCohort(student)

    const cohortToAddStudentTo = this.#findCohort(cohortName)
    this.#throwErrorIfUndefined(cohortToAddStudentTo)

    const indexOfCohortToAddStudentTo =
      this.cohortList.indexOf(cohortToAddStudentTo)
    if (
      this.cohortList[indexOfCohortToAddStudentTo].studentList.length === 24
    ) {
      throw new Error('cohort is full')
    }
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

  searchForStudentId(id) {
    this.#checkType(id, 'number', `must search for a student id`)
    let foundStudent
    for (let i = 0; i < this.cohortList.length; i++) {
      for (let j = 0; j < this.cohortList[i].studentList.length; j++) {
        if (this.cohortList[i].studentList[j].id === id) {
          foundStudent = this.cohortList[i].studentList[j]
        }
      }
    }
    if (foundStudent) {
      return foundStudent
    }
    throw new Error('no match found')
  }

  searchForStudentName(name) {
    this.#checkType(name, 'string', `name must be a string`)
    const foundStudents = []
    for (let i = 0; i < this.cohortList.length; i++) {
      for (let j = 0; j < this.cohortList[i].studentList.length; j++) {
        const student = this.cohortList[i].studentList[j]
        if (
          student.firstName.includes(name) ||
          student.lastName.includes(name)
        ) {
          foundStudents.push(student)
        }
      }
    }
    if (foundStudents.length > 0) {
      return foundStudents
    }
    throw new Error('no match found')
  }

  #findCohort(searchQuery) {
    return this.cohortList.find((cohort) =>
      cohort.name.toLowerCase().includes(searchQuery.toLowerCase())
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

  #checkForEmptyNameAndDuplicates(name) {
    if (name.length === 0) {
      throw new Error('cohort must have a name')
    }
    const isDuplicate = !!this.#findCohort(name.toLowerCase())
    if (isDuplicate) {
      throw new Error('cohort already exists')
    }
  }

  #checkIfStudentIsInOtherCohort(student) {
    for (let i = 0; i < this.cohortList.length; i++) {
      for (let j = 0; j < this.cohortList[i].studentList.length; j++) {
        if (this.cohortList[i].studentList[j] === student) {
          throw new Error('student already exists in a different cohort')
        }
      }
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
