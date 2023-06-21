class CohortList {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohort) {
    const newCohort = {
      cohortName: cohort.cohortName, // try create 2 cohort and check that they get called their right 'cohortName'
      students: []
    }
    this.cohortList.push(newCohort)
    console.log('list', this.cohortList)
    return this.cohortList
  }

  // addNewStudent(studentID) {
  //   if()
  // }
}

module.exports = CohortList
