class Cohort {
  constructor(cohortName, students = []) {
    this.cohortName = cohortName
    this.students = students
  }

  newCohort() {
    return { cohortName: this.cohortName, students: this.students }
  }
}

class CohortManager {
  constructor(cohorts) {
    this.cohorts = cohorts
  }

  createCohort(cohortName) {
    const newCohort = new Cohort(cohortName).newCohort()
    this.cohorts.push(newCohort)
    return true
  }

  removeCohort(cohortName) {
    if (this.searchCohort(cohortName)) {
      const filteredCohorts = this.cohorts.filter(
        (element) => element.cohortName !== cohortName
      )
      this.cohorts = filteredCohorts
      return true
    }
  }

  searchCohort(cohortName) {
    const cohorts = this.cohorts.find((obj) => obj.cohortName === cohortName)

    if (cohorts) {
      return cohorts
    } else {
      throw new Error('Cohort not found')
    }
  }

  addStudentToCohort(cohortName, studentId) {
    const cohorts = this.searchCohort(cohortName)
    const student = students.find((obj) => obj.studentID === studentId)

    if (student) {
      cohorts.students.push(student)
      return true
    } else {
      throw new Error('Student not found')
    }
  }

  removeStudentFromCohort(cohortName, studentId) {
    const cohorts = this.searchCohort(cohortName)
    const findStudent = cohorts.students.find(
      (obj) => obj.studentID === studentId
    )

    if (findStudent) {
      const index = cohorts.students.indexOf(findStudent)
      cohorts.students.splice(index, 1)
      return true
    } else {
      throw new Error('Student not found')
    }
  }

  getCohorts() {
    return this.cohorts
  }
}
const students = [
  {
    studentID: 1,
    firstName: 'Asiye',
    lastName: 'Yurtkuran',
    gitHubUsername: 'Asiyeyurtkuran',
    email: 'asiyeyurtkuran@gmail.com'
  },
  {
    studentID: 2,
    firstName: 'Joe',
    lastName: 'Knock',
    gitHubUsername: 'joeknock',
    email: 'joeknock@gmail.com'
  },
  {
    studentID: 3,
    firstName: 'bob',
    lastName: 'white',
    gitHubUsername: 'bobwhite',
    email: 'bobwhite@gmail.com'
  }
]

;(module.exports = CohortManager), students, Cohort
