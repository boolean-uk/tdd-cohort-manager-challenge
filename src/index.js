class Student {
  constructor(id, first, last, username, email) {
    this.id = id
    this.firstName = first
    this.lastName = last
    this.github = username
    this.email = email
  }
}

class Cohort {
  constructor(name) {
    this.cohortName = name
    this.students = []
    this.id = 1
  }

  add(first, last, username, email) {
    const student = new Student(this.id, first, last, username, email)
    this.id++
    this.students.push(student)
    return student
  }
}

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  create(name) {
    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
    return newCohort
  }

  search(name) {
    const found = this.cohorts.find((c) => c.cohortName === name)

    if (!found) {
      // eslint-disable-next-line no-throw-literal
      throw 'Cohort not found'
    }
    return found
  }

  getAll() {
    return this.cohorts
  }

  remove(name) {
    const found = this.getAll()
    const removed = found.filter((c) => c.cohortName !== name)
    return removed
  }
}

export { Cohort, Student }

export default CohortManager
