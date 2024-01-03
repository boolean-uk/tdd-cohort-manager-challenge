import Cohort from './cohort.js'

class Branch {
  constructor(location) {
    this.location = location
    this.cohorts = []
  }

  cohortExists(cohortName) {
    return !!this.getCohortByName(cohortName)
  }

  getCohortByName(cohortName) {
    return this.cohorts.find((cohort) => cohort.name === cohortName)
  }

  addCohort(cohortName) {
    const duplicates = this.getCohortByName(cohortName)
    console.log(duplicates)
    if (duplicates) {
      throw new Error('already exists')
    }

    this.cohorts.push(new Cohort(cohortName))
    return this.cohorts
  }

  removeCohort(cohortName) {
    const cohortToRemove = this.getCohortByName(cohortName)
    if (!cohortToRemove) {
      throw new Error('does not exist')
    }

    this.cohorts = this.cohorts.filter((cohort) => cohort !== cohortToRemove)
    return this.cohorts
  }
}

export default Branch
