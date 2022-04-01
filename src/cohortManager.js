const Cohort = require('./cohort.js')

class CohortManager {
  constructor () {
    this.cohortList = []
  }

  get (cohortNum) {
    return this.cohortList.find(cohort => cohort.name === cohortNum)
  }

  add (cohortNum) {
    const existingCohort = this.get(cohortNum)
    if (!cohortNum || existingCohort) return Error('Empty name or name already exist')

    const newCohort = new Cohort(cohortNum)
    this.cohortList.push(newCohort)

    return `You have added Cohort ${cohortNum}`
  }

  search (cohortNum) {
    const targetCohort = this.get(cohortNum)
    if (!targetCohort) return Error('this cohort do not exist')
    return targetCohort
  }

  remove (cohortNum) {
    const targetCohort = this.get(cohortNum)
    const targetIndex = this.cohortList.indexOf(targetCohort)
    if (!targetCohort) return Error('this cohort do not exist')
    this.cohortList.splice(targetIndex, 1)
    return this.cohortList
  }
}

module.exports = CohortManager
