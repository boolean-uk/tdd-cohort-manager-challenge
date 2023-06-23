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
      throw new Error("The cohort doesn't exist")
    }
    return searchResult[0]
  }

  addStudent(firstName, lastName, githubUsername, email, cohort) {
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
    searchResult.forEach((element) => {
      if (element === undefined) {
        searchResult.splice(searchResult.indexOf(element), 1)
      }
    })

    if (searchResult[0] === undefined) {
      throw new Error("The student doesn't exist")
    }
    return searchResult[0]
  }

  removeStudent(first, last) {
    this.searchStudent(first, last)

    try {
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
    } catch (err) {
      if (err) {
        return this.cohortData
      }
    }
  }
}
// const cohortManager = new CohortManager()
// cohortManager.create('Cohort 9')
// cohortManager.create('Cohort 10')
// cohortManager.create('Cohort 11')
// cohortManager.addStudent(
//   'Max',
//   'Verstappen',
//   'maxie',
//   'max@max.com',
//   'Cohort 11'
// )
// cohortManager.addStudent(
//   'Kyle',
//   'Bridgewater',
//   'kyleUnderwater',
//   'kylebridge@yahoo.com',
//   'Cohort 9'
// )
// cohortManager.addStudent(
//   'Alexandra',
//   "O'neil",
//   'zandOneil4',
//   'AlexOneil@gmail.com',
//   'Cohort 10'
// )
// cohortManager.addStudent(
//   'Billy',
//   'Sanders',
//   'billysanders101',
//   'billysanders101@gmail.com',
//   'Cohort 9'
// )
// console.log(cohortManager.removeStudent('Alexandra', "O'neil"))

module.exports = CohortManager
