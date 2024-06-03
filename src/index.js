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
}

class Cohort {
  constructor(id, ctName) {
    this.cName = ctName
    this.studentsList = []
    this.id = id
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
