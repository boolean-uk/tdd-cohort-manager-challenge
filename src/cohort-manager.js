const Twilio = require('twilio')
const twilioSid = 'AC3efa86e83e2b14d6a212a3032c0743e2'
const twilioAuth = '1a351ff8179888ad2134b8db6c5a2eae'
const client = new Twilio(twilioSid, twilioAuth)

// Errors
const COHORT_DOES_NOT_EXIST = 'Cohort does not exist'
const NO_STUDENT_ID = 'Student ID not found'
const COHORT_SAME_NAME = 'There is already a cohort with the same name'
const STUDENT_ALREADY_EXISTS = 'This student already part of a cohort'
const FULL_COHORT = 'Cohort is full'

const Cohort = require('./cohort.js')

class CohortManager {
  constructor () {
    this.cohorts = []
    this.studentID = 1
  }

  addCohort (cohortName) {
    if (this.cohortFinder(cohortName)) {
      throw new Error(COHORT_SAME_NAME)
    }

    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
  }

  removeCohort (cohortName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      if (cohort.checkCohortName(cohortName)) {
        this.cohorts.splice(i, 1)
        return
      }
    }
    throw new Error(COHORT_DOES_NOT_EXIST)
  }

  studentFinder (github, email) {
    if (this.searchByProperty('github', github).length > 0 ||
    this.searchByProperty('email', email).length > 0) {
      return true
    }
    return false
  }

  addStudent (cohortName, first, last, github, email) {
    const cohort = this.cohortFinder(cohortName)

    if (this.studentFinder(github, email)) {
      throw new Error(STUDENT_ALREADY_EXISTS)
    }

    if (!cohort) {
      throw new Error(COHORT_DOES_NOT_EXIST)
    }

    if (cohort.cohortIsFull()) {
      throw new Error(FULL_COHORT)
    }

    cohort.addStudentToCohort(this.studentID, first, last, github, email)
    this.twilioSMS(first, cohortName, this.studentID)
    this.studentID++
  }

  twilioSMS (first, cohort, id) {
    client.messages
      .create({
        body: `Welcome to Boolean UK, ${first}. You have been added to ${cohort} and your student ID is ${id}`,
        from: '+19377613612',
        to: '+447777077700'
      })
      .then(message => console.log(message.sid))
  }

  removeStudent (cohortName, id) {
    const cohort = this.cohortFinder(cohortName)

    if (!cohort) {
      throw new Error(COHORT_DOES_NOT_EXIST)
    }

    if (this.searchByProperty('id', id).length === 0) {
      throw new Error(NO_STUDENT_ID)
    }

    cohort.removeStudentFromCohort(id)
  }

  cohortFinder (cohortName) {
    return this.cohorts.find(cohort => cohort.checkCohortName(cohortName))
  }

  searchByCohort (cohortName) {
    return this.cohortFinder(cohortName)
      ? this.cohortFinder(cohortName)
      : COHORT_DOES_NOT_EXIST
  }

  searchByProperty (property, value) {
    const studentsWithThisProperty = []

    for (const cohort of this.cohorts) {
      const studentCheck = cohort.studentCheckerByProperty(property, value)
      if (studentCheck.length > 0) {
        studentsWithThisProperty.push(studentCheck)
      }
    }

    return studentsWithThisProperty.flat()
  }

  searchByID (id) {
    return this.searchByProperty('id', id).length > 0
      ? this.searchByProperty('id', id)[0]
      : NO_STUDENT_ID
  }

  searchStudentsByFirstname (first) {
    return this.searchByProperty('firstname', first)
  }

  searchStudentsByLastname (last) {
    return this.searchByProperty('lastname', last)
  }

  searchStudentsByBothNames (first, last) {
    const firstname = this.searchStudentsByFirstname(first)
    const lastname = this.searchStudentsByLastname(last)

    return firstname.filter(element => lastname.includes(element))
  }
}

module.exports = CohortManager
