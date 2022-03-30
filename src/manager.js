const Cohort = require('../src/cohort')
const Student = require('../src/student')

class Manager {
  constructor() {
    this.cohorts = []
    this.cohortId = 0
    this.studentId = 0
  }

  addCohort(name) {
    if (this.cohorts.some((cohort) => cohort.name === name))
      return 'This cohort already exist'
    this.cohortId++
    this.cohorts.push({ ...new Cohort(name, this.cohortId) })
  }

  searchCohort(name) {
    return (
      this.cohorts.find((cohort) => cohort.name === name) || 'Cohort not found'
    )
  }

  searchStudent(studentId) {
    let student
    this.cohorts.forEach((cohort) => {
      if (typeof student !== 'object') {
        student = cohort.students.find((student) => student.id === studentId)
      }
    })
    return student || 'Student not found'
  }

  addStudent(cohortName, studentName, github, email) {
    if (!this.searchCohort(cohortName)) return 'Cohort Not Found'
    const currCohort = this.searchCohort(cohortName)
    if (currCohort.students.length >= currCohort.maxCapacity)
      return 'Cohort is full'
    console.log(currCohort.students.length, currCohort.maxCapacity)
    this.studentId++
    if (this.studentChecker(studentName, github, email))
      return 'Student already exists'
    currCohort.students.push({
      ...new Student(studentName, this.studentId, github, email)
    })
  }

  studentChecker(name, github, email) {
    const allStudents = []
    const [firstName, lastName] = name.split(' ')
    this.cohorts.forEach((cohort) => {
      cohort.students.forEach((student) => {
        allStudents.push(student)
      })
    })
    return allStudents.some((student) => {
      if (
        student.firstName === firstName &&
        student.lastName === lastName &&
        student.githubUsername === github &&
        student.email === email
      ) {
        return true
      }
      return false
    })
  }

  removeCohort(cohortName) {
    if (!this.searchCohort(cohortName)) return 'Cohort Not Found'
    return (this.filter = this.cohorts.filter(
      (cohort) => cohort.name === cohortName
    ))
  }

  removeStudent(cohortName, studentId) {
    if (!this.searchCohort(cohortName)) return 'Cohort Not Found'
    const originalLength = this.searchCohort(cohortName).students.length
    this.searchCohort(cohortName).students = this.searchCohort(
      cohortName
    ).students.filter((student) => student.id !== studentId)
    if (originalLength !== this.searchCohort(cohortName).students.length) {
      return this.searchCohort(cohortName).students
    } else console.error('Student not found')
  }
}

const manager = new Manager()
manager.addCohort('Cohort 5')
manager.addCohort('Cohort 8')
manager.addStudent('Cohort 5', 'Tibor Toth', 'Tibor22', 'tibor@gmail.com')
manager.addStudent('Cohort 5', 'Bob Bagel', 'Bob10', 'bob@gmail.com')
manager.addStudent('Cohort 5', 'Jenefer Gerola', 'Jen10', 'jenjen@gmail.com')

console.log(
  manager.addStudent('Cohort 8', 'Jenefer Gerola', 'Jen10', 'jenjen@gmail.com')
)

// manager.removeStudent('Cohort 5', 3)
// console.log(manager.searchStudent(1))

console.log(manager.searchCohort('Cohort 5').students)
console.log(manager.searchCohort('Cohort 8').students)

module.exports = Manager
