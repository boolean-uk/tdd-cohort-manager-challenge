class CohortDetainment {
  constructor() {
    this.cohortManager = []
    this.idCount = 1
  }

  createCohort(cohortName) {
    const newCohort = { [cohortName.toLowerCase()]: [] }
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

  removeStudent(cohortName, studentName) {
    let idxOfStudent
    let idxOfCohort
    const resultOfCohortFind = this.cohortManager.find((obj, idx) => {
      if (obj.hasOwnProperty(cohortName)) {
        idxOfCohort = idx
        return obj
      } else return false
    })
    if (!resultOfCohortFind) {
      throw new Error('Cohort Not Found!')
    } else {
      const resultOfStudentFind = resultOfCohortFind[cohortName].find(
        (obj, idx) => {
          if (obj.firstName.toLowerCase() === studentName.toLowerCase()) {
            idxOfStudent = idx
            return obj
          } else return false
        }
      )
      if (!resultOfStudentFind) {
        throw new Error('Student Not Found!')
      } else {
        this.cohortManager[idxOfCohort][cohortName].splice(idxOfStudent, 1)
        return resultOfStudentFind
      }
    }
  }
}

module.exports = CohortDetainment
