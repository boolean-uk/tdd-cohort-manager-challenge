const Cohort = require('../src/cohort.js')
const Student = require('./student.js')

class Manager {
  constructor () {
    this.cohorts = []
    this.studentID = 1
    this.maxCapacity = 24
  }

  createCohort (cohortName) {
    if (!cohortName) return 'Cannot create a cohort without a name.'
    const cohortExists = this.cohorts.find(el => el.name === cohortName)
    if (cohortExists) return 'Cannot create cohorts with the same name.'

    const cohortToCreate = new Cohort(cohortName)
    this.cohorts.push(cohortToCreate)

    return `${cohortToCreate.name} was created.`
  }

  getCohort (cohortName) {
    const cohort = this.cohorts.find(cohort => cohort.name === cohortName)
    if (cohort) return cohort
    return false
  }

  getStudent (studentID) {
    for (const cohort of this.cohorts) {
      const student = cohort.students.find(el => el.id === studentID)
      if (student) return student
    }
  }

  getStudentByName (firstName, lastName) {
    const filteredList = []
    for (const cohort of this.cohorts) {
      const students = cohort.students.reduce((acc, cur) => {
        if (cur.firstName === firstName) acc.push(cur)
        
        return acc
      }, [])
      filteredList.push(...students)
    }
    return filteredList
  }

  removeCohort (cohortName) {
    const cohortToRemove = this.getCohort(cohortName)
    if (cohortToRemove) {
      this.cohorts = this.cohorts.filter(cohort => cohort.name !== cohortToRemove.name)
      return cohortToRemove
    }

    return 'Error: Cohort not found.'
  }

  addStudent (firstName, lastName, gitHub, email, cohortName) {
    const cohort = this.getCohort(cohortName)
    if (!cohort) return 'Error: Cohort not found.'
    if (cohort.students.length >= this.maxCapacity) return 'Cohort at max capacity already.'

    const student = new Student(this.studentID, firstName, lastName, gitHub, email)
    const studentExists = this.getStudent(student.id)
    if (studentExists) return 'Student already exists.'

    cohort.addStudent(student)
    this.studentID++
    return student
  }

  removeStudent (studentID, cohortName) {
    const cohort = this.getCohort(cohortName)
    try {
      return cohort.removeStudent(studentID)
    } catch {
      return 'Error: Student or Cohort not found'
    }
  }
}

module.exports = Manager
