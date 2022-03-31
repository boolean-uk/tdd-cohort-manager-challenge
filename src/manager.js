import Cohort from './cohort.js'
import { localeIncludes } from 'locale-includes'
export default class Manager {
  constructor() {
    this.cohorts = []
    this.cohortId = 0
    this.studentId = 0
  }

  addCohort(name) {
    if (name.length === 0) return 'Cohort needs to have name'
    if (this.cohorts.some((cohort) => cohort.name === name))
      return 'This cohort already exist'
    this.cohortId++
    this.cohorts.push(new Cohort(name, this.cohortId))
  }

  searchCohort(name) {
    return this.cohorts.find((cohort) => cohort.name === name) || false
  }

  searchStudent(studentId) {
    let student
    this.cohorts.forEach((cohort) => {
      if (typeof student !== 'object') {
        student = cohort.students.find((student) => student.id === studentId)
      }
    })
    return student || 'Student not found'
  }

  addStudent(cohortName, studentName, github, email) {
    const currCohort = this.searchCohort(cohortName)
    if (!currCohort) return 'Cohort Not Found'
    if (this.studentChecker(studentName, github, email))
      return 'Student already exists'
    this.studentId++
    return currCohort.addStudent(studentName, this.studentId, github, email)
  }

  studentChecker(name, github, email) {
    const allStudents = []
    const [firstName, lastName] = name.split(' ')
    this.cohorts.forEach((cohort) => {
      cohort.students.forEach((student) => {
        allStudents.push(student)
      })
    })
    return allStudents.some((student) => {
      if (
        student.firstName === firstName &&
        student.lastName === lastName &&
        student.githubUsername === github &&
        student.email === email
      ) {
        return true
      }
      return false
    })
  }

  removeCohort(cohortName) {
    if (!this.searchCohort(cohortName)) return 'Cohort Not Found'
    return (this.filter = this.cohorts.filter(
      (cohort) => cohort.name === cohortName
    ))
  }

  removeStudent(cohortName, studentId) {
    if (!this.searchCohort(cohortName)) return 'Cohort Not Found'
    this.searchCohort(cohortName).removeStudent(studentId)
  }

  searchForStudents(name) {
    const [firstName, lastName] = name.split(' ')
    const everyMatch = []
    this.cohorts.forEach((cohort) => {
      cohort.students.forEach((student) => {
        for (let [key, value] of Object.entries(student)) {
          if (typeof value !== 'string') break

          if (
            localeIncludes(value, firstName, {
              usage: 'search',
              sensitivity: 'base'
            }) ||
            localeIncludes(value, lastName, {
              usage: 'search',
              sensitivity: 'base'
            })
          ) {
            everyMatch.push(student)
          }
        }
      })
    })
    const unique = Array.from(new Set(everyMatch))
    return unique
  }
}
