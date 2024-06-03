class Student {
  constructor() {
    this.studentID = ''
    this.firstName = ''
    this.lastName = ''
    this.githubUsername = ''
    this.email = ''
  }

  studentDetails(studentID, firstName, lastName, githubUsername, email) {
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }

  getName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  addStudent(student) {
    if (this.students.some((s) => s.studentID === student.studentID)) {
      throw new Error('Student already in cohort')
    }
    this.students.push(student)
  }

  removeStudent(studentID) {
    const studentIndex = this.students.findIndex(
      (s) => s.studentID === studentID
    )
    if (studentIndex === -1) {
      throw new Error('Student not found')
    }
    this.students.splice(studentIndex, 1)
  }

  findStudent(studentID) {
    const student = this.students.find((s) => s.studentID === studentID)
    if (!student) {
      throw new Error('Student not found')
    }
    return student
  }
}

class CohortManager {
  constructor() {
    this.cohorts = new Map()
  }

  createCohort(cohortName) {
    if (this.cohorts.has(cohortName)) {
      throw new Error('Cohort already exists')
    }
    this.cohorts.set(cohortName, new Cohort(cohortName))
  }

  searchCohort(cohortName) {
    if (!this.cohorts.has(cohortName)) {
      throw new Error('Cohort not found')
    }
    return this.cohorts.get(cohortName)
  }

  addStudentToCohort(cohortName, student) {
    const cohort = this.searchCohort(cohortName)
    cohort.addStudent(student)
  }

  removeCohort(cohortName) {
    if (!this.cohorts.has(cohortName)) {
      throw new Error('Cohort not found')
    }
    this.cohorts.delete(cohortName)
  }

  removeStudentFromCohort(cohortName, studentID) {
    const cohort = this.searchCohort(cohortName)
    cohort.removeStudent(studentID)
  }
}

export { Student, Cohort, CohortManager }
