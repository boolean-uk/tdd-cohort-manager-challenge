/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const Cohort = require('./Cohort')
const Student = require('./Student')

class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.studentsId = 1
  }

  addCohort(name) {
    const regex = /^[A-Za-z0-9 ]*$/
    if (name === '') {
      return 'invalid name'
    }
    if (regex.test(name)) {
      const newCohort = new Cohort(name)
      const selectedName = []

      this.cohorts.push(newCohort)

      this.cohorts.find((element) => {
        if (element.name === name) {
          selectedName.push(element)
        }
      })
      return selectedName.length ? 'cohort already exist' : this.cohorts
    }
    return 'invalid name'
  }

  addStudent(name, lastname, email, gitLink, id) {
    id = this.studentsId++
    const newStudent = new Student(name, lastname, gitLink, email, id)
    this.students.push(newStudent)
    return newStudent
  }

  searchByName(list, name) {
    const selectedItem = []
    list.find((element) => {
      if (element.name === name) {
        selectedItem.push(element)
      }
    })
    const selectedList = list === this.students ? 'student' : 'cohort'
    return selectedItem.length ? selectedItem : `${selectedList} not found`
  }

  searchById(id) {
    const selectedItem = []
    this.students.find((element) => {
      if (element.id === id) {
        selectedItem.push(element)
      }
    })
    return selectedItem.length ? selectedItem[0] : 'student not found'
  }

  assignStudentToCohort(studentId, cohort) {
    const selectedStudent = this.students.find((e) => e.id === studentId)
    const selectedCohort = this.cohorts.find((e) => e.name === cohort)
    if (selectedCohort === undefined || selectedStudent === undefined) {
      const undefinedElement =
        selectedCohort === undefined ? 'cohort' : 'student'
      return `${undefinedElement} not found`
    }
    selectedCohort.students.push(selectedStudent)
    return selectedCohort
  }

  removeCohort(cohort) {
    const selectedCohort = this.searchByName(this.cohorts, cohort)

    if (typeof selectedCohort === 'string') {
      return selectedCohort
    }
    this.cohorts.forEach((c, index) => {
      if (c === selectedCohort[0]) {
        this.cohorts.splice(index, 1)
      }
    })
    console.log(selectedCohort)

    return this.cohorts
  }

  removeStudent(name) {
    const selectedStudent = this.searchByName(this.students, name)

    if (typeof selectedStudent === 'string') {
      return selectedStudent
    }
    this.students.forEach((c, index) => {
      if (c === selectedStudent[0]) {
        this.students.splice(index, 1)
      }
    })

    return this.students
  }
}

module.exports = CohortManager
