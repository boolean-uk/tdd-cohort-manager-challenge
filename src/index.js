class Cohortmanager {
  constructor() {
    this.cohorts = []
    this.id = 1
  }

  create(cName) {
    const newCohort = new Cohort(this.id, cName)
    this.id++
    this.cohorts.push(newCohort)
    return newCohort
  }

  search(cName) {
    const result = this.cohorts.find((c) => c.cName === cName)
    if (result === undefined) {
      return false
    }
    return result
  }

  remove(cName) {
    const found = this.cohorts.find((c) => c.cName === cName)
    if (!found) {
      throw new Error('cohort not found!')
    } else {
      this.cohorts = this.cohorts.filter((c) => c.cName !== cName)
      return this.cohorts
    }
  }
}

class Cohort {
  constructor(id, cName) {
    this.cName = cName
    this.studentsList = []
    this.id = id
    this.studentId = 1
  }

  addStudent(fName, lName, gitHub, email) {
    const newStudent = new Student(this.studentId, fName, lName, gitHub, email)
    this.studentsList.push(newStudent)
    this.studentId++
    return newStudent
  }

  remove(fName) {
    const found = this.studentsList.find((name) => name.fName === fName)
    if (!found) {
      throw new Error('Could not found it!')
    } else {
      this.studentsList = this.studentsList.filter((s) => s.fName !== fName)
      return this.studentsList

      // this.cohorts = this.cohorts.filter((c) => c.cName !== cName)
      // return this.cohorts
    }
  }
}

class Student {
  constructor(id, fName, lName, gitHub, email) {
    this.id = id
    this.fName = fName
    this.lName = lName
    this.gitHub = gitHub
    this.email = email
  }
}
export { Student, Cohortmanager, Cohort }
