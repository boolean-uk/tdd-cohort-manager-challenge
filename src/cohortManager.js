const Student = require("./student")
const Cohort = require("./cohort")
const COHORT_CAPACITY = 24

class CohortManager {
  constructor () {
    this.cohorts = []
    this.cohortCapacity = COHORT_CAPACITY
  }

  createCohort (name) {
    if (typeof (name) === "undefined") return "cohort must have a NAME!"
    const exists = this.cohorts.find(x => x.name === name)
    if (exists) return "cohorts cannot have the same name"
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  getCohortByName (name) {
    const cohort = this.cohorts.find(x => x.name === name)
    if (cohort) return cohort
    return "cohort not found"
  }

  addStudentToCohort (cohortName, name, lastName, githubUser, email) {
    const cohort = this.cohorts.find(x => x.name === cohortName)
    if (!cohort) return "cohort not found"
    if (cohort.studentsNum >= this.cohortCapacity) return "cohort is full!"
    if (this.alreadyExist(email)) return "student exist already"
    cohort.addStudent(cohortName.substring(7), name, lastName, githubUser, email)
    return cohort
  }

  removeCohortByName (name) {
    const cohort = this.cohorts.find(x => x.name === name)
    if (!cohort) return "cohort not found"
    this.cohorts.splice(this.cohorts.indexOf(cohort), 1)
  }

  removeStudent (id) {
    for (let n of this.cohorts) {
      const student = n.students.find(s => s.id === id)
      if (!student) continue
      n.students.splice(n.students.indexOf(student), 1)
      return `${id} has been removed`
    } return "student not found"
  }

  alreadyExist (email) {
    return this.cohorts.some(n => n.students.some(x => x.email === email))
  }

  getStudentById (id) {
    for (let n of this.cohorts) {
      for (let m of n.students) {
        if (m.id === id) {
          return m
        }
      }
    } return "student not found"
  }

  getStudentByFirstLastName (fullname) {
    const arr = fullname.match(/\w+\b/g)
    for (let n of this.cohorts) {
      for (let m of n.students) {
        if (m.firstName === arr[0] && m.lastName === arr[1]) {
          return m
        }
      }
    } return "student not found"
  }

}

module.exports = CohortManager

const manager = new CohortManager()
