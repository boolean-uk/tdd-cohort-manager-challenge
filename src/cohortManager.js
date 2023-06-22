class CohortManager {
  constructor() {
    this.cohortData = []
  }

  create(cohort) {
    const obj = {
      cohortName: cohort,
      students: []
    }

    this.cohortData.push(obj)
    return this.cohortData
  }

  searchCohort(cohort) {
    const searchResult = this.cohortData.filter((obj) => {
      return obj.cohortName === cohort
    })

    if (searchResult[0] === undefined) {
      return "The cohort doesn't exist"
    }
    return searchResult[0]
  }

  addStudent(firstName, lastName, githubUsername, email, cohort) {
    if (this.searchCohort(cohort) === "The cohort doesn't exist") {
      return "The cohort doesn't exist"
    }

    this.searchCohort(cohort).students.push({
      firstName,
      lastName,
      githubUsername,
      email,
      id:
        (`${this.cohortData.indexOf(this.searchCohort(cohort)) + 1}` +
          `1` +
          `${this.searchCohort(cohort).students.length + 1}`) /
        '1'
    })
    return this.cohortData
  }

  removeCohort(cohort) {
    if (this.searchCohort(cohort) === "The cohort doesn't exist") {
      return "The cohort doesn't exist"
    }
    this.cohortData.splice(
      this.cohortData.indexOf(this.searchCohort(cohort), 1)
    )
    return this.cohortData
  }

  searchStudent(first, last) {
    const searchResult = []
    this.cohortData.forEach((obj) => {
      searchResult.push(
        obj.students.filter((student) => {
          return student.firstName === first && student.lastName === last
        })[0]
      )
    })
    if (searchResult[0] === undefined) {
      return "The student doesn't exist"
    }
    return searchResult[0]
  }

  removeStudent(first, last) {
    if (this.searchStudent(first, last) === "The student doesn't exist") {
      return "The student doesn't exist"
    }
    this.cohortData.forEach((obj) => {
      if (obj.students.indexOf(this.searchStudent(first, last)) === -1) {
        return
      }
      obj.students.splice(
        obj.students.indexOf(this.searchStudent(first, last)),
        1
      )
    })

    return this.cohortData
  }
}

module.exports = CohortManager
