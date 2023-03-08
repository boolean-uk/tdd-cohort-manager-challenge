class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.idCounter = 0
  }

  createCohort(name) {
    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
    return this.cohorts
  }

  createStudent(fName, lName, githubUsername = '', email = '') {
    this.idCounter++
    const newStudent = new Student(fName, lName, githubUsername, email)
    newStudent.studentId = this.idCounter
    this.students.push(newStudent)
  }

  findCohort(name) {
    const cohort = this.cohorts.find((cohort) => cohort.name === name)
    return cohort === undefined ? `No cohort with this name` : cohort
  }

  addStudentToCohort(id, name) {
    const student = this.students.find((student) => student.studentId === id)
    const cohort = this.findCohort(name)
    if (cohort === undefined) {
      return 'No cohort with this name'
    }
    if (student === undefined) {
      return 'No student with this ID'
    }
    cohort.students.push(student)
    return cohort
  }

  removeCohort(name) {
    if (this.findCohort(name) === `No cohort with this name`) {
      return 'No cohort with this name'
    }

    this.cohorts = this.cohorts.filter((cohort) => cohort.name !== name)
    return this.cohorts
  }

  findStudent(id) {
    const student = this.students.find((student) => student.studentId === id)
    if (student === undefined) {
      return 'No student with this ID'
    }
    return student
  }
}

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.capacity = 24
  }

  removeStudent(id) {
    if (
      this.students.find((student) => student.studentId === id) === undefined
    ) {
      return 'No student with this ID'
    }
    this.students = this.students.filter((student) => student.studentId !== id)
    return this.students
  }
}

class Student {
  constructor(fName, lName, githubUsername = '', email = '') {
    this.firstName = fName
    this.lastName = lName
    this.githubUsername = githubUsername
    this.email = email
  }
}

module.exports = {
  CohortManager,
  Cohort,
  Student
}
