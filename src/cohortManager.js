// State varaible:
// const cohortDataStore = [
//     {
//        cohortName: cohortName,
//        students: {
//         firstName: firstName,
//         lastName: lastName,
//         studentId: studentId,
//         githubUsername: githubUsername,
//         email: email
//        }
//     }
// ]

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
}

module.exports = CohortManager
