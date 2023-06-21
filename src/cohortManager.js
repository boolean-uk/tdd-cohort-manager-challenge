class CohortList {
  constructor() {
    this.cohortList = []
  }

  createCohort(cohort) {
    const newCohort = {
      cohortName: cohort.cohortName, // try create 2 cohort and check that they get called their right 'cohortName'
      students: []
    }
    if (this.cohortList.cohortName !== newCohort.cohortName) {
      this.cohortList.push(newCohort)
      console.log('list', this.cohortList)
      return newCohort
    } else {
      return 'This cohort already exists!'
    }
  }
  // addNewStudent(studentID) {
  //   if()
  // }
}

module.exports = CohortList
