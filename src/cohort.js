import fs from 'fs/promises'

const cohorts = []
async function initializeCohortData() {
  try {
    // reading json file
    const rawData = await fs.readFile('./cohort.json', 'utf-8')
    return JSON.parse(rawData)
  } catch (error) {
    // Handle errors
    console.error('Error reading cohort data:', error.message)
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

  async create() {
    const cohortData = await initializeCohortData()

    if (!cohortData) {
      throw new Error(
        'Cohort data not initialized. Call initializeCohortData() first.'
      )
    }

    if (cohorts.find((cohort) => cohort.cohortName === this.cohortName)) {
      throw new Error(`Cohort '${this.cohortName}' already exists.`)
    }

    cohorts.push(this)
  }

  search() {
    const foundCohort = cohorts.find(
      (cohort) => cohort.cohortName === this.cohortName
    )
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
    const index = cohorts.findIndex(
      (cohort) => cohort.cohortName === this.cohortName
    )
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

export { cohorts }
