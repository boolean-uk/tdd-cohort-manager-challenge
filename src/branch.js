import Cohort from './cohort.js'

class Branch {
  constructor(location) {
    this.location = location
    this.cohorts = []
  }

  cohortExists(cohortName) {
    return !!this.cohorts.find((cohort) => cohort.name === cohortName)
  }

  getCohortByName(cohortName) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )

    if (!foundCohort) {
      throw new Error(`cohort of name ${cohortName} does not exist`)
    }
    return foundCohort
  }

  addCohort(cohortName) {
    const duplicates = this.cohortExists(cohortName)
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
