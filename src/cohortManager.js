class CohortDetainment {
  constructor() {
    this.cohortManager = []
    this.idCount = 1
  }

  createCohort(cohortName) {
    const newCohort = { [cohortName]: [] }
    this.cohortManager.push(newCohort)
    return newCohort
  }

  searchForCohort(cohortName) {
    const resultOfFind = this.cohortManager.find((obj) =>
      obj.hasOwnProperty(cohortName)
    )
    return resultOfFind
  }

  addStudent(cohortName, newStudentName) {
    const resultOfFind = this.cohortManager.find((obj) =>
      obj.hasOwnProperty(cohortName)
    )
    const newStudent = {
      StudentID: this.idCount++,
      firstName: newStudentName,
      lastName: 'Jan',
      githubUsername: 'NoroAxper',
      email: 'classified'
    }
    resultOfFind[cohortName].push(newStudent)
    return newStudent
  }
}

module.exports = CohortDetainment
