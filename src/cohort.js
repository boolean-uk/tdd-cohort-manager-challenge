export default class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.studentID = 1
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  search(name) {
    const found = this.cohorts.find((cohort) => cohort.name === name)
    if (!found) throw Error('cohort not found')

    return found
  }

  remove(name) {
    const updatedCohortsList = this.cohorts.filter(
      (cohort) => cohort.name !== name
    )
    this.cohorts = updatedCohortsList
    return this.cohorts
  }

  addStudentToCohort(student, cohort) {
    cohort.addStudent(student)
    student.setCohortID(cohort.id)
    return student
  }

  removeStudentFromCohort(studentFirstName, cohortName) {
    const targetCohort = this.search(cohortName)
    targetCohort.removeStudent(studentFirstName)
  }

  createStudent(firstName, lastName, githubUsername, email) {
    const student = new Student(
      this.studentID,
      firstName,
      lastName,
      githubUsername,
      email
    )
    this.students.push(student)
    this.studentID++
    return student
  }

  searchByStudentID(id) {
    const found = this.students.find((student) => student.studentID === id)
    if (!found) throw new Error('student not found')

    return found
  }
}

export class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.studentID = 1
  }

  addStudent(student) {
    this.students.push(student)

    return student
  }

  searchStudent(name) {
    const found = this.students.find(
      (student) => student.firstName === name || student.lastName === name
    )
    if (!found) throw Error('student not found')

    return found
  }

  removeStudent(studentFirstName) {
    const updatedStudents = this.students.filter(
      (student) => student.firstName !== studentFirstName
    )
    this.students = updatedStudents
  }
}

export class Student {
  constructor(studentID, firstName, lastName, githubUsername, email) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
    this.cohortID = null
  }

  setCohortID(id) {
    this.cohortID = id
  }
}
