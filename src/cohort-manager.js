const Cohort = require('./cohort')
const Student = require('./student')

class CohortManager {
  constructor() {
    this.cohortArray = []
    this.studentID = 1
  }

  addCohort(name, maxCapacity) {
    if (name.length === 0) {
      return false
    }
    for (let i = 0; i < this.cohortArray.length; i++) {
      const cohort = this.cohortArray[i]
      if (name === cohort.name) {
        return false
      }
    }
    const newCohort = new Cohort(name, maxCapacity)
    this.cohortArray.push(newCohort)
    return this.cohortArray
  }

  removeCohort(name) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      const cohort = this.cohortArray[i]
      if (name === cohort.name) {
        this.cohortArray.splice(i, 1)
        return this.cohortArray
      }
    }
    return false
  }

  searchByCohortName(name) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      const cohort = this.cohortArray[i]
      if (name === cohort.name) {
        return cohort
      }
    }
    return 'This cohort does not exist'
  }

  searchByStudentEmail(email) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
        const student = this.cohortArray[i].studentsArray[j]
        if (email === student.email) {
          return student
        }
      }
    }
    return 'There are no students with the entered email'
  }

  searchByStudentID(studentID) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
        const student = this.cohortArray[i].studentsArray[j]
        if (studentID === student.studentID) {
          return student
        }
      }
    }
    return 'There are no students with the entered email'
  }

  addStudentToCohort(cohortName, firstName, surname, githubUser, email) {
    if (
      this.searchByStudentEmail(email) !==
      'There are no students with the entered email'
    ) {
      return false
    }
    const student = new Student(
      cohortName,
      firstName,
      surname,
      githubUser,
      email
    )
    for (let i = 0; i < this.cohortArray.length; i++) {
      const cohort = this.cohortArray[i]
      if (
        cohortName === cohort.name &&
        cohort.studentsArray.length < cohort.maxCapacity
      ) {
        student.studentID = this.studentID
        this.studentID++
        cohort.studentsArray.push(student)
        return student
      }
    }
    return false
  }

  removeStudentFromCohort(cohortName, email) {
    for (let i = 0; i < this.cohortArray.length; i++) {
      const cohort = this.cohortArray[i]
      if (cohortName === cohort.name) {
        for (let j = 0; j < cohort.studentsArray.length; j++) {
          const student = cohort.studentsArray[j]
          if (email === student.email) {
            cohort.studentsArray.splice(j, 1)
            return cohort.studentsArray
          }
        }
      }
    }
    return false
  }

  searchStudentByName(firstName, surname) {
    const matchedNameArray = []
    for (let i = 0; i < this.cohortArray.length; i++) {
      for (let j = 0; j < this.cohortArray[i].studentsArray.length; j++) {
        const student = this.cohortArray[i].studentsArray[j]
        if (student.surname === surname || student.firstName === firstName) {
          matchedNameArray.push(student)
        }
      }
    }
    if (matchedNameArray.length === 0) {
      return false
    }
    return matchedNameArray
  }
}

module.exports = CohortManager
