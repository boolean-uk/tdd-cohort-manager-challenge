import crypto from 'crypto'
import errors from './errors.js'

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    if (!name) {
      throw errors.cohortNameInvalid
    }

    if (
      this.cohorts.find((element) => {
        return element.name === name
      })
    ) {
      throw errors.cohortExists
    }

    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
  }

  removeCohort(name) {
    if (
      !this.cohorts.find((element) => {
        return element.name === name
      })
    ) {
      throw errors.notFound
    }
    this.cohorts = this.cohorts.filter((element) => {
      return element.name !== name
    })
  }

  addStudent(student, cohortName) {
    let searchedCohort

    this.cohorts.forEach((cohort) => {
      if (cohort.name === cohortName) {
        searchedCohort = cohort
      }

      if (
        cohort.students.find((element) => {
          return (
            element.firstName === student.firstName &&
            element.lastName === student.lastName &&
            element.email === student.email &&
            element.username === student.username
          )
        })
      )
        throw errors.alreadyEnrolled
    })

    if (!searchedCohort) {
      throw errors.notFound
    }

    if (searchedCohort.students.length === 24) {
      throw errors.maximumSize
    }

    const studentData = [...Object.values(student)]

    const newStudent = new Student(...studentData, crypto.randomUUID())

    searchedCohort.students.push(newStudent)

    return newStudent
  }

  removeStudent(cohortName, studentId) {
    const cohort = this.searchCohort(cohortName)

    if (
      !cohort.students.find((element) => {
        return element.id === studentId
      })
    ) {
      throw errors.studentNotFound
    }

    cohort.students = cohort.students.filter((element) => {
      return element.id !== studentId
    })
  }

  searchCohort(cohortName) {
    const cohort = this.cohorts.find((element) => {
      return element.name === cohortName
    })

    if (!cohort) {
      throw errors.notFound
    }

    return cohort
  }

  searchStudentById(studentId) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      const student = cohort.students.find((element) => {
        return element.id === studentId
      })
      if (student) {
        return student
      }
    }

    throw errors.studentNotFound
  }

  searchStudentByName(firstName, lastName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      const student = cohort.students.find((element) => {
        return element.firstName === firstName && element.lastName === lastName
      })
      if (student) {
        return student
      }
    }

    throw errors.studentNotFound
  }
}

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }
}

class Student {
  constructor(firstName, lastName, email, username, id) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.username = username
    this.id = id
  }
}

export default CohortManager

export { Cohort, Student }
