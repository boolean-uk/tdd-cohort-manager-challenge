class CohortManager {
  constructor() {
    this.id = 0
    this.cohorts = []
  }

  addCohort(name) {
    this.id++
    const cohort = {
      id: this.id,
      cohortName: name,
      students: []
    }
    this.cohorts.push(cohort)
    return cohort
  }

  searchByCohortName(cohortName) {
    const item = this.cohorts.find((item) => item.cohortName === cohortName)
    if (item === undefined) throw new Error('Cohort was not found')
    return item
  }

  addStudent(cohortName, firstName, lastName, githubUsername, email) {
    const cohortToSearch = this.searchByCohortName(cohortName)
    const student = {
      firstName: firstName,
      lastName: lastName,
      githubUsername: githubUsername,
      email: email,
      studentID: this.generateStudentId(7)
    }
    cohortToSearch.students.push(student)
    return cohortToSearch
  }

  generateStudentId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let randomValue = ''
    for (let i = 0; i < length; i++) {
      randomValue += characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
    }
    return randomValue
  }

  removeCohort(cohort) {
    const cohortToDelete = this.searchByCohortName(cohort).cohortName
    if (cohortToDelete) {
      this.cohorts = this.cohorts.filter(
        (item) => item.cohortName !== cohortToDelete
      )
    }

    return this.cohorts
  }
}

module.exports = CohortManager
