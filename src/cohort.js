class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const newCohort = {
      cohortName: name,
      students: []
    }
    this.cohorts.push(newCohort)
    return this.cohorts
  }

  searchCohort(name) {
    const targCoh = this.cohorts.find((c) => c.cohortName === name)
    return targCoh
  }

  createStudent(coh, firstName, lastName, gitUserName, email) {
    const tInd = this.cohorts.findIndex((c) => c.cohortName === coh)
    const newId = this.cohorts[tInd].students.length + 1
    const newStudent = {
      studentId: newId,
      firstName: firstName,
      lastName: lastName,
      gitUserName: gitUserName,
      email: email
    }
    this.cohorts[tInd].students.push(newStudent)
    return this.searchCohort(coh)
  }

  removeCohort(name) {
    const tInd = this.cohorts.findIndex((c) => c.cohortName === name)
    this.cohorts.splice(tInd, 1)
    return this.cohorts
  }
}

module.exports = CohortManager
