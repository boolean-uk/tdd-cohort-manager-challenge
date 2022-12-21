const { Cohort } = require('../src/Cohort')
const { Student } = require('../src/Student')

class CohortManager {
  constructor() {
    this.cohortList = []
    this.studentList = []
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohortList.push(cohort)

    return cohort
  }

  createStudent(firstName, lastName, githubUsername, email) {
    const id = this.studentList.length + 1
    const student = new Student(firstName, lastName, githubUsername, email, id)
    this.studentList.push(student)

    // const found = this.searchCohorts(cohort)
    // if (found) found.students.push(student)

    return student
  }

  searchCohorts(cohortName) {
    const found = this.cohortList.find((cohort) => cohort.name === cohortName)

    if (!found) throw new Error('No cohorts found!')

    return found
  }
}

// const cohortManager = new CohortManager()
// // cohortManager.createCohort('Cohort 1')

module.exports = { CohortManager }
