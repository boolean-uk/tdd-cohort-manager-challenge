class Student {
  constructor(id, fName, lName, gitHub, email) {
    this.id = id
    this.fName = fName
    this.lName = lName
    this.gitHub = gitHub
    this.email = email
  }
}

class Cohortmanager {
  constructor() {
    this.cohorts = []
    this.id = 1
  }
}

export { Student, Cohortmanager }
