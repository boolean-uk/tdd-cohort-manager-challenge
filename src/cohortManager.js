class CohortManager {
  constructor () {
    this.cohortList = []
  }

  add (newCohort) {
    this.cohortList.push(newCohort)
  }

  search (cohortName) {
    for (const cohort of this.cohortList) {
      if (cohort.name === cohortName) return cohort
    }
    return Error('this cohort do not exist')
  }

  remove (cohortName) {
    for (const cohort of this.cohortList) {
      const targetIndex = this.cohortList.indexOf(cohort)
      if (cohort.name === cohortName) return this.cohortList.splice(targetIndex, 1)
    }
    return Error('this cohort do not exist')
  }

  eligible () {
    const modifiedCohortList = []
    for (const cohort of this.cohortList) {
      if (cohort.name && !modifiedCohortList.includes(cohort)) modifiedCohortList.push(cohort)
    }
    return modifiedCohortList
  }
}

module.exports = CohortManager
