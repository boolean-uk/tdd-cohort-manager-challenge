// Twilio
const { smsNotification } = require('./twilio_sms')

class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.idCounter = 0
  }

  createCohort(name) {
    const cohortName = name.toLowerCase()
    if (cohortName.length === 0) {
      throw new Error('To create a cohort, it must have a name')
    }
    if (!this.hasCohort(cohortName)) {
      throw new Error('Cohorts can not have the same name')
    }
    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)
    return this.cohorts
  }

  createStudent(fName, lName, githubUsername = '', email = '') {
    this.idCounter++
    const newStudent = new Student(fName, lName, githubUsername, email)
    newStudent.id = this.idCounter
    this.students.push(newStudent)
    return newStudent
  }

  hasCohort(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    return cohort === undefined
  }

  findCohort(name) {
    const cohortName = name.toLowerCase()
    const cohort = this.cohorts.find((cohort) => cohort.name === cohortName)
    if (cohort === undefined) {
      throw new Error(`No cohort with this name`)
    }
    return cohort
  }

  addStudentToCohort(id, name) {
    const student = this.students.find((student) => student.id === id)
    const cohortName = name.toLowerCase()
    const cohort = this.findCohort(cohortName)
    if (cohort === undefined) {
      throw new Error('No cohort with this name')
    }

    if (cohort.students.length === cohort.capacity) {
      throw new Error(
        `Unable to add more students to ${cohort.name}. It currently has ${cohort.students.length}/${cohort.capacity} students`
      )
    }

    if (student === undefined) {
      throw new Error('No student with this ID')
    }

    if (student.cohort !== 'none') {
      throw new Error("Student's can only be in 1 cohort")
    }
    student.cohort = cohort.name
    cohort.students.push(student)
    const message = `${student.firstName} ${student.lastName} has been added to ${cohort.name}.`
    smsNotification(message)
    return cohort
  }

  removeCohort(name) {
    const cohortName = name.toLowerCase()
    // If no cohort is found with that name, it will use the throw new error from .findCohort
    this.findCohort(cohortName)

    this.cohorts = this.cohorts.filter((cohort) => cohort.name !== cohortName)
    return this.cohorts
  }

  findStudent(id) {
    const student = this.students.find((student) => student.id === id)
    if (student === undefined) {
      throw new Error('No student with this ID')
    }
    return student
  }

  findStudentByName(name) {
    const searchInput = name.toLowerCase()
    const results = this.students.filter((student) => {
      const studentName =
        `${student.firstName} ${student.lastName}`.toLowerCase()
      return studentName.includes(searchInput)
    })
    return results
  }
}

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.capacity = 24
  }

  removeStudent(id) {
    const student = this.students.find((student) => student.id === id)
    if (student === undefined) {
      throw new Error('No student with this ID')
    }
    student.cohort = 'none'
    this.students = this.students.filter((student) => student.id !== id)
    const message = `${student.firstName} ${student.lastName} has been removed from ${this.name}`
    smsNotification(message)
    return this.students
  }
}

class Student {
  constructor(fName, lName, githubUsername = '', email = '') {
    this.firstName = fName
    this.lastName = lName
    this.githubUsername = githubUsername
    this.email = email
    this.cohort = 'none'
  }
}

module.exports = {
  CohortManager,
  Cohort,
  Student
}
