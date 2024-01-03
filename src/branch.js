class Branch {
  constructor(location) {
    this.location = location
    this.cohorts = []
  }

  cohortExists(cohortObj) {
    return !!this.cohorts.find((cohort) => cohort === cohortObj)
  }

  addCohort(cohortObj) {
    if (this.cohortExists(cohortObj)) {
      throw new Error('already exists')
    }

    this.cohorts.push(cohortObj)
    return this.cohorts
  }

  removeCohort(cohortName) {
    const cohortToRemove = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )
    if (!cohortToRemove) {
      throw new Error('does not exist')
    }

    this.cohorts = this.cohorts.filter((cohort) => cohort !== cohortToRemove)
    return this.cohorts
  }
}

export default Branch
