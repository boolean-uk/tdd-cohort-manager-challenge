const Cohort = require('./Cohort.js')
const Student = require('./Student.js')

class CohortManager {
  constructor() {
    this.id = 1
    this.cohorts = []
  }

  checkCohortName(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    if (cohort !== undefined) throw new Error('cohort name taken')
    if (name === undefined) throw new Error('cohort requires a name')
  }

  createCohort(name) {
    this.checkCohortName(name)
    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
    return this.cohorts
  }

  findCohort(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    return cohort
  }

  searchCohorts(name) {
    const cohort = this.findCohort(name)
    if (cohort === undefined) throw new Error('cohort not found')
    return cohort
  }

  addStudent(name, firstName, lastName, github, email) {
    const cohort = this.findCohort(name)
    if (cohort !== undefined && cohort.students.length > 22) {
      throw new Error('cohort full!')
    }
    const studentFound = this.cohorts.find((cohort) =>
      cohort.students.find((stu) => stu.email === email)
    )
    if (studentFound !== undefined)
      throw new Error('student cannot exist in multiple cohorts')
    const student = new Student(firstName, lastName, github, email)
    student.id = this.id++
    cohort.students.push(student)
    return cohort.students
  }

  removeCohort(name) {
    const cohort = this.searchCohorts(name)
    if (cohort === undefined) throw new Error('cohort not found')
    const index = this.cohorts.indexOf(cohort)
    this.cohorts.splice(index, 1)
    return this.cohorts
  }

  removeStudent(name, id) {
    const cohort = this.searchCohorts(name)
    if (cohort === undefined) throw new Error('cohort not found')
    const student = cohort.students.find((stu) => stu.id === id)
    if (student === undefined) throw new Error('student not found')
    const index = cohort.students.indexOf(student)
    cohort.students.splice(index, 1)
    return cohort.students
  }

  findStudentById(id) {
    const cohort = this.cohorts.find((cohort) =>
      cohort.students.find((stu) => stu.id === id)
    )
    if (cohort === undefined) throw new Error('student not found')
    const student = cohort.students.find((stu) => stu.id === id)
    return student
  }

  findStudentsByName(name) {
    const results = []
    this.cohorts.find((cohort) =>
      cohort.students.forEach((stu) => {
        if (stu.firstName === name || stu.lastname === name) {
          results.push(stu)
        }
      })
    )
    if (name === undefined) throw new Error('please give us something')
    else {
      if (results.length === 0) throw new Error('no matches found')
    }
    return results
  }

  findStudentByIdTwo(cohort, id) {
    const student = cohort.find((stu) => stu.id === id)
    return student
  }
}

module.exports = CohortManager
