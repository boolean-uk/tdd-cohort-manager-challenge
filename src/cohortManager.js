const Student = require('../src/student.js')

class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  addCohort(name) {
    this.id++
    const cohort = {
      id: this.id,
      cohortName: name,
      students: []
    }
    this.cohorts.push(cohort)
    return cohort
  }

  searchByCohortName(cohortName) {
    const item = this.cohorts.find((item) => item.cohortName === cohortName)
    if (item === undefined) throw new Error('Cohort was not found')
    return item
  }

  addStudent(cohortName, firstName, lastName, githubUsername, email) {
    const cohortToSearch = this.searchByCohortName(cohortName)
    const student = new Student(firstName, lastName, githubUsername, email)
    cohortToSearch.students.push(student)
    return cohortToSearch
  }

  removeCohort(cohort) {
    const cohortToDelete = this.searchByCohortName(cohort).cohortName
    if (cohortToDelete) {
      this.cohorts = this.cohorts.filter(
        (item) => item.cohortName !== cohortToDelete
      )
    }
    return this.cohorts
  }

  removeStudent(fullName) {
    const [firstName, lastName] = fullName.split(' ')
    let studentFound = false

    for (let i = 0; i < this.cohorts.length; i++) {
      const students = this.cohorts[i].students

      const index = students.findIndex(
        (student) =>
          student.firstName === firstName && student.lastName === lastName
      )

      if (index !== -1) {
        students.splice(index, 1)
        studentFound = true
        break
      }
    }
    if (!studentFound) {
      throw new Error('Student was not found')
    }

    return this.cohorts
  }

  getStudentId(cohortName, firstName, lastName) {
    const cohortToSearch = this.searchByCohortName(cohortName)
    const student = cohortToSearch.students.find(
      (student) =>
        student.firstName === firstName && student.lastName === lastName
    )

    if (!student) {
      throw new Error('Student was not found')
    }

    return student.studentID
  }

  searchByStudentId(studentID) {
    let studentFound = null
    for (let i = 0; i < this.cohorts.length; i++) {
      const students = this.cohorts[i].students
      const student = students.find(
        (student) => student.studentID === studentID
      )
      if (student) {
        studentFound = student
        break
      }
    }
    if (!studentFound) {
      throw new Error('Student was not found')
    }
    console.log(studentFound)
    return true
  }
}

const test = new CohortManager()
test.addCohort('cohort01')
test.addStudent('cohort01', 'carol', 'arruda')
console.log(test.cohorts[0].students)
const stTest = test.getStudentId('cohort01', 'carol', 'arruda')
test.searchByStudentId(stTest)

module.exports = CohortManager
