export default class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
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

  searchByStudentID(id) {
    const found = this.students.find((student) => student.studentID === id)
    if (!found) throw new Error('student not found')

    return found
  }

  remove(name) {
    const updatedCohortsList = this.cohorts.filter(
      (cohort) => cohort.name !== name
    )
    this.cohorts = updatedCohortsList
    return this.cohorts
  }

  addStudentToCohort(studentDetails, cohortName) {
    const targetCohort = this.search(cohortName)
    const student = targetCohort.addStudent(studentDetails)
    this.students.push({ ...student, cohort: cohortName })
    return student
  }

  removeStudentFromCohort(studentFirstName, cohortName) {
    const targetCohort = this.search(cohortName)
    targetCohort.removeStudent(studentFirstName)
  }
}

export class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.studentID = 1
  }

  addStudent(studentDetails) {
    if (this.studentID >= 25) throw new Error('Cohort is full')

    const student = new Student(
      this.studentID,
      studentDetails.firstName,
      studentDetails.lastName,
      studentDetails.githubUsername,
      studentDetails.email
    )
    this.students.push(student)
    this.studentID++
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
  }
}
