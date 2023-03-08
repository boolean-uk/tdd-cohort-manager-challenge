const Cohort = require('./cohort')
const Student = require('./student')

class CohortManager {
  constructor() {
    this.students = []
    this.cohorts = []
  }

  createCohort(name) {
    if (name === undefined || name === '') return 'Cohort must have a name'
    const doesNotExist = this.searchCohort(name) === 'Cohort does not exist'
    if (doesNotExist) {
      const cohortToAdd = new Cohort(name)
      this.cohorts.push(cohortToAdd)
    } else {
      return 'Cohort already exists'
    }
  }

  searchCohort(name) {
    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (foundCohort === undefined) return 'Cohort does not exist'
    else return foundCohort
  }

  searchStudent(id) {
    const foundStudent = this.students.find((student) => student.id === id)
    if (foundStudent === undefined) return 'Student does not exist'
    return foundStudent
  }

  newStudent(first, last, git, email) {
    let nextId
    if (this.students.length > 0) {
      nextId = this.students[this.students.length - 1].id + 1
    } else {
      nextId = 1
    }
    const studentToAdd = new Student(nextId, first, last)
    this.students.push(studentToAdd)
  }

  addStudentToCohort(id, cohort) {
    const studentToAdd = this.searchStudent(id)
    const targetCohort = this.searchCohort(cohort)
    if (studentToAdd === 'Student does not exist') return studentToAdd
    if (targetCohort === 'Cohort does not exist') return targetCohort
    const res = targetCohort.addStudent(studentToAdd)
    if (res) return res
  }

  removeCohort(name) {
    const targetCohort = this.searchCohort(name)
    if (targetCohort === 'Cohort does not exist') return targetCohort
    const removeIndex = this.cohorts.findIndex(
      (cohort) => cohort === targetCohort
    )
    this.cohorts.splice(removeIndex, 1)
  }

  removeStudentFromCohort(id, cohort) {
    const studentToRemove = this.searchStudent(id)
    const targetCohort = this.searchCohort(cohort)
    if (studentToRemove === 'Student does not exist') return studentToRemove
    if (targetCohort === 'Cohort does not exist') return targetCohort
    const res = targetCohort.removeStudent(studentToRemove)
    if (res) return res
  }
}

module.exports = CohortManager
