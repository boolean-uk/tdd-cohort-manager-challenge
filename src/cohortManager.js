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
    const cohort = this.cohorts.find((item) => item.cohortName === cohortName)
    if (cohort === undefined) throw new Error('Cohort was not found')
    return true
  }

  addStudent(cohort, firstName, lastName, githubUsername, email) {
    const item = this.cohorts.find((item) => item.cohortName === cohort)
    console.log(item)
    if (item === undefined) throw new Error('Cohort was not found')

    const student = {
      firstName: firstName,
      lastName: lastName,
      githubUsername: githubUsername,
      email: email,
      id: this.generateStudentId(7)
    }
    item.students.push(student)
    console.log(item)
    return item
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
}

module.exports = CohortManager
