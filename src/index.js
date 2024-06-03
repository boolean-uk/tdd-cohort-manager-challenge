class Cohortmanager {
  constructor() {
    this.cohorts = []
    this.id = 1
  }

  creat(cName) {
    const newCohort = new Cohort(this.id, cName)
    this.id++
    this.cohorts.push(newCohort)
    return this.cohorts
  }
}

class Cohort {
  constructor(id, cohortName) {
    this.cohortName = cohortName
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
export { Student, Cohortmanager }
