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

  findStudentBy(cohortname, id) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortname
    )
    if (!foundCohort) throw new Error('A cohort with this name does NOT exist')
    const students = foundCohort.students
    const foundStudent = students.find((student) => student.id === id)
    if (!foundStudent) throw new Error('A Student with this ID does NOT exist')
    return foundStudent
  }

  removeStudent(cohortname, id) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortname
    )
    if (!foundCohort) throw new Error('A cohort with this name does NOT exist')
    const students = foundCohort.students
    const foundStudent = this.findStudentBy(cohortname, id)
    const index = students.indexOf(foundStudent)
    return students.splice(index, 1)[0]
  }
}

// EXTENDED REQUIRMENTS:
// - Search for student by student ID
// - Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
// - Cohorts can't have the same name, and can't exist without a name
// - The same student can't exist in multiple cohorts.
// - A student can't be removed from a cohort if it wasn't present in the first place.
// - Search for students by name (first and last) and return all matching results

module.exports = CohortManager
