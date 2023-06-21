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

  removeCohort(cohortName) {
    let idxOfCohort
    cohortName.toLowerCase()
    const resultOfFind = this.cohortManager.find((obj, idx) => {
      if (obj.hasOwnProperty(cohortName)) {
        idxOfCohort = idx
        return obj
      } else return false
    })
    if (!resultOfFind) {
      throw new Error('Cohort Not Found!')
    } else {
      this.cohortManager.splice(idxOfCohort, 1)
      return resultOfFind
    }
  }
}

module.exports = CohortDetainment
