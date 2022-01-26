const Twilio = require('twilio')
const twilioSid = 'AC3efa86e83e2b14d6a212a3032c0743e2'
const twilioAuth = '1a351ff8179888ad2134b8db6c5a2eae'
const client = new Twilio(twilioSid, twilioAuth)

const Cohort = require('./cohort.js')

class CohortManager {
  constructor () {
    this.cohorts = []
    this.studentID = 1
  }

  addCohort (cohortName) {
    if (this.cohortFinder(cohortName)) {
      throw new Error('There is already a cohort with the same name')
    }

    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
  }

  removeCohort (cohortName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      if (cohort.checkCohortName(cohortName)) {
        this.cohorts.splice(i, 1)
        return 'Removed'
      }
    }
    throw new Error('Cohort does not exist')
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
      throw new Error('This student already part of a cohort')
    }

    if (!cohort) {
      throw new Error('Cohort does not exist')
    }

    if (cohort.cohortIsFull()) {
      throw new Error('Cohort is full')
    }

    cohort.addStudentToCohort(this.studentID, first, last, github, email)
    this.twilioSMS(first, cohortName, this.studentID)
    this.studentID++
    return 'Student Added'
  }

  twilioSMS (first, cohort, id) {
    client.messages
      .create({
        body: `Welcome to Boolean UK, ${first}. You have been added to ${cohort} and your student ID is ${id}`,
        from: '+19377613612',
        to: '+447879490048'
      })
      .then(message => console.log(message.sid))
  }

  removeStudent (cohortName, id) {
    const cohort = this.cohortFinder(cohortName)

    if (!cohort) {
      throw new Error('Cohort does not exist')
    }

    if (this.searchByProperty('id', id).length === 0) {
      throw new Error('Student ID not found')
    }

    cohort.removeStudentFromCohort(id)
    return 'Student Removed'
  }

  cohortFinder (cohortName) {
    return this.cohorts.find(cohort => cohort.checkCohortName(cohortName))
  }

  searchByCohort (cohortName) {
    return this.cohortFinder(cohortName)
      ? this.cohortFinder(cohortName)
      : 'Cohort does not exist'
  }

  searchByProperty (property, value) {
    const studentsWithThisProperty = []

    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      studentsWithThisProperty.push(cohort.studentChecker(property, value))
    }
    return studentsWithThisProperty.flat()
  }

  searchByID (id) {
    return this.searchByProperty('id', id).length > 0
      ? this.searchByProperty('id', id)[0]
      : 'Student ID not found'
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
