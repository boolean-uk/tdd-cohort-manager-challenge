import crypto from 'crypto'

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    if (
      this.cohorts.find((element) => {
        return element.name === name
      })
    ) {
      throw new Error(
        'Cohort already exists with this name, please ensure each name is unique'
      )
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
      throw new Error('Cohort not found')
    }
    this.cohorts = this.cohorts.filter((element) => {
      return element.name !== name
    })
  }

  addStudent(student, cohortName) {
    this.cohorts.forEach((cohort) => {
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
        throw new Error('Student already enrolled')
    })

    const cohort = this.cohorts.find((element) => {
      return element.name === cohortName
    })

    if (cohort.students.length === 24) {
      throw new Error('Cohort at maximum size')
    }

    if (!cohort) {
      throw new Error('Cohort not found')
    }

    const studentData = [...Object.values(student)]

    const newStudent = new Student(...studentData, crypto.randomUUID())

    cohort.students.push(newStudent)

    return newStudent
  }

  removeStudent(cohortName, studentId) {
    const cohort = this.cohorts.find((element) => {
      return element.name === cohortName
    })

    if (!cohort) {
      throw new Error('Cohort not found')
    }

    if (
      !cohort.students.find((element) => {
        return element.id === studentId
      })
    ) {
      throw new Error('Student not found')
    }

    cohort.students = cohort.students.filter((element) => {
      return element.id !== studentId
    })
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

export { Cohort }
