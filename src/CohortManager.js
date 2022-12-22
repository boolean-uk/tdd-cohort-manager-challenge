const { Cohort } = require('../src/Cohort')
const { Student } = require('../src/Student')

class CohortManager {
  constructor() {
    this.cohortList = []
    this.studentList = []
  }

  createCohort(name) {
    const id = this.cohortList.length + 1
    const cohort = new Cohort(name, id)
    this.cohortList.push(cohort)

    return cohort
  }

  createStudent(firstName, lastName, githubUsername, email) {
    const id = this.studentList.length + 1
    const student = new Student(firstName, lastName, githubUsername, email, id)
    this.studentList.push(student)

    return student
  }

  searchCohorts(cohortName) {
    const found = this.cohortList.find((cohort) => cohort.name === cohortName)

    if (!found) throw new Error('No cohorts found!')

    return found
  }

  searchStudents(studentLastname) {
    const found = this.studentList.find(
      (student) => student.lastName === studentLastname
    )

    if (!found) throw new Error('No students found!')

    return found
  }

  addStudentToCohort(studentLastName, cohortName) {
    const foundStudent = this.searchStudents(studentLastName)
    const foundCohort = this.searchCohorts(cohortName)

    if (foundStudent && foundCohort) {
      foundCohort.students.push(foundStudent)
      foundStudent.cohort = foundCohort.name
    }

    return foundCohort
  }

  removeCohort(cohortName) {
    const cohortToRemove = this.searchCohorts(cohortName)

    this.cohortList = this.cohortList.filter(
      (cohort) => cohort.name !== cohortName
    )

    return cohortToRemove
  }

  removeStudent(studentLastName, cohortName) {
    const foundStudent = this.searchStudents(studentLastName)
    const foundCohort = this.searchCohorts(cohortName)

    const found = foundCohort.students.find(
      (student) => student.lastName === foundStudent.lastName
    )

    if (!found)
      throw new Error('There is no student with that name in this cohort')

    foundCohort.students = foundCohort.students.filter(
      (student) => student.lastName !== studentLastName
    )

    return foundCohort
  }
}

// const cohortManager = new CohortManager()
// cohortManager.createCohort('Super Cohort')
// cohortManager.createStudent(
//   'chew',
//   'bacca',
//   'rawr',
//   'walkingcarpet@rebelalliance.net'
// )

module.exports = { CohortManager }
