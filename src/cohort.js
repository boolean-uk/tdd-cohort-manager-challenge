import fs from 'fs/promises'

const cohorts = []

let rawData
fs.readFile('../cohort.json', 'utf-8')
  .then((data) => {
    rawData = data
    initializeCohortData()
  })
  .catch((error) => {
    console.error('Error reading cohort data:', error.message)
    throw error
  })

function initializeCohortData() {
  try {
    const parsedData = JSON.parse(rawData)
    // Use parsedData as needed
    console.log('Parsed Cohort Data:', parsedData)
  } catch (error) {
    console.error('Error parsing cohort data:', error.message)
    throw error
  }
}

export class Student {
  constructor(studentID, firstName, lastName, githubUsername, email) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }
}

export class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
    this.students = []
  }

  create() {
    const existingCohort = cohorts.find((c) => c.cohortName === this.cohortName)
    if (existingCohort) {
      throw new Error(`Cohort '${this.cohortName}' already exists.`)
    }

    cohorts.push(this)
  }

  search() {
    const foundCohort = cohorts.find((c) => c.cohortName === this.cohortName)
    if (!foundCohort) {
      throw new Error(`Cohort '${this.cohortName}' not found.`)
    }
    return foundCohort
  }

  addStudent(student) {
    if (this.students.find((s) => s.studentID === student.studentID)) {
      throw new Error(
        `Student '${student.studentID}' already exists in '${this.cohortName}'.`
      )
    }
    this.students.push(student)
  }

  remove() {
    const index = cohorts.findIndex((c) => c.cohortName === this.cohortName)
    if (index === -1) {
      throw new Error(`Cohort '${this.cohortName}' not found.`)
    }
    cohorts.splice(index, 1)
  }

  removeStudent(student) {
    const index = this.students.findIndex(
      (s) => s.studentID === student.studentID
    )
    if (index === -1) {
      throw new Error(
        `Student '${student.studentID}' not found in '${this.cohortName}'.`
      )
    }

    this.students.splice(index, 1)
  }
}

export default { cohorts }
