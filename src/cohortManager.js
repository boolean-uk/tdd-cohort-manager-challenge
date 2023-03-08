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
}

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.capacity = 24
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
