class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  createCohort(str) {
    const cohort = {
      name: str,
      students: []
    }
    if (this.findCohortBy(str) === true) {
      throw new Error('A cohort with this name already exists')
    }
    this.cohorts.push(cohort)
    return cohort
  }

  findCohortBy(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    if (cohort === undefined) return false
    return true
  }

  getAllCohorts() {
    return this.cohorts
  }

  searchForCohortBy(name) {
    if (this.findCohortBy(name) === false)
      throw new Error('A cohort with this name does NOT exist')
    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)
    return foundCohort
  }

  removeCohort(name) {
    if (this.findCohortBy(name) === false)
      throw new Error('A cohort with this name does NOT exist')
    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)
    const index = this.cohorts.indexOf(foundCohort)
    return this.cohorts.splice(index, 1)[0]
  }

  addStudent(firstName, lastName, github, email, name) {
    this.id++
    const student = {
      id: this.id,
      firstName,
      lastName,
      github,
      email
    }

    const foundCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (!foundCohort) throw new Error('A cohort with this name does NOT exist')
    foundCohort.students.push(student)
    return foundCohort
  }
}

// push deleted cohort into a deleted cohort array
// maybe add this in later ^

// remove student
// use findStudentBy(id)
// use splice to remove student from students array
// throw Error if student does not exist

module.exports = CohortManager
