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
    return obj
  }
}

module.exports = CohortManager
