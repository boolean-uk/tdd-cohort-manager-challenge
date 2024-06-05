export default class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.cohortID = 1
    this.studentID = 1
  }

  createCohort(name) {
    const found = this.cohorts.find((cohort) => cohort.name === name)
    if (found) throw new Error("two cohorts can't have the same name")
    const cohort = new Cohort(this.cohortID, name)
    this.cohorts.push(cohort)
    this.cohortID++
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
    if (student.cohortID !== null)
      throw new Error('Student already in a cohort')
    cohort.addStudent(student)
    student.setCohortID(cohort.id)
    return student
  }

  removeStudentFromCohort(student, cohort) {
    if (student.cohortID !== cohort.id) throw new Error('student not in cohort')

    cohort.removeStudent(student)
    student.setCohortID(null)
    return student
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

  searchStudentByName(name) {
    const result = this.students.filter(
      (student) =>
        name.includes(student.firstName) || name.includes(student.lastName)
    )

    return result
  }
}

export class Cohort {
  constructor(id, name) {
    if (name === undefined || name === null || name.trim().length === 0)
      throw new Error('cohort must have a name')
    this.name = name
    this.id = id
    this.students = []
    this.studentID = 1
  }

  addStudent(student) {
    if (this.students.length >= 24) throw new Error('Cohort is full')
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

  removeStudent(target) {
    const updatedStudents = this.students.filter(
      (student) => student.studentID !== target.studentID
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
