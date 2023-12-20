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

  addCohort(cohortObj) {
    if (!!this.cohorts.find(cohort => cohort === cohortObj)) {
      throw new Error('already exists')
    }

    this.cohorts.push(cohortObj)
  }

  removeCohort(cohortObj) {
    if (!this.cohorts.find(cohort => cohort === cohortObj)) {
      throw new Error('does not exist')
    }

    this.cohorts = this.cohorts.filter(cohort => cohort !== cohortObj)
  }
}

export { Branches, addBranch, Branch }
