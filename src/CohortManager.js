class CohortManager {
  constructor() {
    this.cohorts = []
    this.studentID = 0
  }

  createCohort(cohortName) {
    const addCohort = {
      cohortName: cohortName,
      students: []
    }
    this.cohorts.push(addCohort)
    return addCohort
  }

  // const existingCohort = this.findCohortByName(cohortName)

  // // if (existingCohort) {
  // //   console.log('Cohort already exists')
  // //   return existingCohort
  // // }

  findCohortByName(cohortName) {
    return this.cohorts.find((cohort) => cohort.cohortName === cohortName)
  }




module.exports = CohortManager
