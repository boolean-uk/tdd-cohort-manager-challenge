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
    if (cohortName === '' || cohortName === undefined) {
      throw new Error('Please provide a cohort name')
    }
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

  studentDuplicateCheck(firstName, lastName, gitName, email, cohortName) {
    for (const cohort of this.cohortList) {
      const studentFound = cohort.cohortStudents.find(
        (item) =>
          item.firstName === firstName &&
          item.lastName === lastName &&
          item.gitName === gitName &&
          item.email === email
      )
      if (studentFound && cohort.cohortName === cohortName) {
        throw new Error('Student already exists in this cohort')
      } else if (studentFound && cohort.cohortName !== cohortName) {
        throw new Error('Student already exists in another cohort')
      }
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
    } else if (cohortFound.cohortStudents.length >= 24) {
      throw new Error('Cohort is full')
    } else {
      this.studentDuplicateCheck(
        firstName,
        lastName,
        gitName,
        email,
        cohortName
      )
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

  removeStudent(cohortName, studentFirstName, studentLastName) {
    const cohortFound = this.cohortList.find(
      (item) => item.cohortName === cohortName
    )
    if (!cohortFound) {
      throw new Error('Cohort not found')
    }
    const studentFound = cohortFound.cohortStudents.find(
      (item) =>
        item.firstName === studentFirstName && item.lastName === studentLastName
    )
    if (studentFound) {
      const deletionIndex = cohortFound.cohortStudents.indexOf(studentFound)
      cohortFound.cohortStudents.splice(deletionIndex, 1)
    } else {
      throw new Error('Student not found')
    }
  }

  findStudentByID(studentID) {
    if (studentID === undefined || isNaN(studentID)) {
      throw new Error('Invalid or missing student ID')
    }
    for (const cohort of this.cohortList) {
      const studentFound = cohort.cohortStudents.find(
        (item) => item.studentID === studentID
      )
      if (studentFound) {
        const studentSearchResult = {
          ...studentFound,
          cohort: cohort.cohortName
        }
        return studentSearchResult
      }
    }
    throw new Error('No student matching that ID was found')
  }
}

module.exports = CohortManager
