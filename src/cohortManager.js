const Student = require('../src/student.js')

class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  addCohort(name) {
    const existingCohort = this.cohorts.find(
      (cohort) => cohort.cohortName === name
    )
    if (existingCohort) {
      throw new Error('The cohort name is already in use! Please pick another')
    }
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
    let studentFound = null
    for (let i = 0; i < this.cohorts.length; i++) {
      const students = this.cohorts[i].students
      const student = students.find(
        (student) => student.githubUsername === githubUsername
      )
      if (student) {
        studentFound = student
        break
      }
    }
    if (studentFound) {
      throw new Error('The student already exists in another cohort')
    }
    if (cohortToSearch.students.length < 24) {
      const student = new Student(firstName, lastName, githubUsername, email)
      cohortToSearch.students.push(student)
      return cohortToSearch
    }
    throw new Error('Cohort capacity exceeded: cannot add more students')
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
    return true
  }

  searchByFullname(fullname) {
    const [firstName, lastName] = fullname.split(' ')
    const studentsFound = []
    for (let i = 0; i < this.cohorts.length; i++) {
      const students = this.cohorts[i].students
      const matchingStudents = students.filter(
        (student) =>
          student.firstName === firstName && student.lastName === lastName
      )
      studentsFound.push(...matchingStudents)
    }
    if (studentsFound.length === 0) {
      throw new Error('No students with that name exist')
    }
    return true
  }
}

module.exports = CohortManager
