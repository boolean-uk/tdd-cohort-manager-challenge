const Student = require('./Student.js')
const Cohort = require('./Cohort.js')

class CohortManager {
  constructor() {
    this.cohortList = []
    this.newCohortID = 0
    this.newStudentID = 0
  }

  createCohort(cohortName) {
    const cohortFound = this.cohortList.find((item) => item.name === cohortName)
    if (cohortFound) {
      throw new Error('Cohort name is already in use')
    } else {
      this.newCohortID++
      const newCohort = new Cohort(cohortName, this.newCohortID)
      this.cohortList.push(newCohort)
    }
  }

  findCohort(cohortName) {
    const cohortFound = this.cohortList.find(
      (item) => item.cohortName === cohortName
    )
    if (cohortFound) {
      return cohortFound
    } else {
      throw new Error('Cohort not found')
    }
  }

  addStudent(firstName, lastName, gitName, email, cohortName) {
    const definedParameters = Object.keys([
      firstName,
      lastName,
      gitName,
      email,
      cohortName
    ])
    const cohortFound = this.cohortList.find(
      (item) => item.cohortName === cohortName
    )
    if (definedParameters.length !== 5) {
      throw new Error('Please make sure to provide all student details')
    } else if (!cohortFound) {
      throw new Error('Cohort not found')
    } else {
      this.newStudentID++
      const student = new Student(
        this.newStudentID,
        firstName,
        lastName,
        gitName,
        email
      )
      cohortFound.cohortStudents.push(student)
    }
  }

  removeCohort(cohortName) {
    const cohortFound = this.cohortList.find(
      (item) => item.cohortName === cohortName
    )
    if (cohortFound) {
      const deletionIndex = this.cohortList.indexOf(cohortFound)
      this.cohortList.splice(deletionIndex, 1)
    } else {
      throw new Error('Cohort not found')
    }
  }
}

module.exports = CohortManager
