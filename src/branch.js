const Branches = []

const addBranch = (location) => {
  if (!location || typeof location !== 'string') {
    throw new Error('invalid input')
  }

  if (!Branches.find((branch) => branch.location === location)) {
    const newBranch = new Branch(location)
    Branches.push(newBranch)
  }
  return Branches
}

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

  removeCohort(cohortObj) {
    if (!this.cohortExists(cohortObj)) {
      throw new Error('does not exist')
    }

    this.cohorts = this.cohorts.filter((cohort) => cohort !== cohortObj)
    return this.cohorts
  }
}

export { Branches, addBranch, Branch }
