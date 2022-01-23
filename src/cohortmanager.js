// const student = require("./student.js")

class CohortManager {
  constructor () {
    this.studentList = []
    this.schoolCohorts = []
    this.cohortCapacity = 24
  }

  createStudent (student) {
    this.studentList.push(student)
  }

  createCohort (cohortname) {
    const cohort = {
      name: cohortname,
      students: [],
      cohortCapacity: this.cohortCapacity
    }
    this.schoolCohorts.push(cohort)
    return cohort
  }

  removeCohort (cohortname) {
    for (let i = 0; i < this.schoolCohorts.length; i++) {
      const cohort = this.schoolCohorts[i]
      if (cohort.name === cohortname) {
        this.schoolCohorts.splice(i, 1)
      }
    }
  }

  addStudentToCohort (student, cohortname) {
    const cohort = this.searchCohort(cohortname)
    for (let i = 0; i < this.studentList.length; i++) {
      const cohortStudent = this.studentList[i]
      if (
        cohortStudent.studentFirstName === student &&
        cohort.name === cohortname
      ) {
        cohort.students.push(cohortStudent)
      }
    }
  }

  searchCohort (cohortname) {
    const found = this.schoolCohorts.find((c) => c.name === cohortname)
    if (found) {
      return found
    } else return 'This Cohort does not exist!'
  }

  getAllCohorts () {
    return this.schoolCohorts
  }

  getStudentList () {
    return this.studentList
  }

  removeStudentFromCohort (studentid, cohortname) {
    const cohort = this.searchCohort(cohortname)
    for (let i = 0; i < cohort.students.length; i++) {
      if (cohort.students[i].studentID === studentid) {
        cohort.students.splice(i, 1)
        return
      }
    }
    return 'student not found!'
    // throw error if cohort not found.
  }
}

module.exports = CohortManager
