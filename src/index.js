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

  getAll() {
    return this.students
  }

  remove(id) {
    const found = this.getAll()
    this.students = found.filter((s) => s.id === id)
    return this.students
  }
}

class CohortManager {
  constructor() {
    this.cohorts = []
    this.id = 1
  }

  create(name) {
    const newCohort = new Cohort(name)
    this.id++
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
    const allCohorts = this.getAll()
    const found = this.search(name)
    this.cohorts = allCohorts.filter((c) => c.cohortName !== name)
    if (!found) {
      // eslint-disable-next-line no-throw-literal
      throw 'Cohort not found'
    }
    return this.cohorts
  }
}

export { Cohort, Student }

export default CohortManager
