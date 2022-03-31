const Cohort = require('./cohort.js')

class CohortManager {
  constructor () {
    this.cohortList = []
  }

  add (cohortNum) {
    const existingCohort = this.cohortList.find(cohort => cohort.name === cohortNum)
    if (!cohortNum || existingCohort) return Error('Empty name or name already exist')

    const newCohort = new Cohort(cohortNum)
    this.cohortList.push(newCohort)

    return `You have added Cohort ${cohortNum}`
  }

  search (cohortNum) {
    for (const cohort of this.cohortList) {
      if (cohort.name === cohortNum) return cohort
    }
    return Error('this cohort do not exist')
  }

  remove (cohortNum) {
    for (const cohort of this.cohortList) {
      const targetIndex = this.cohortList.indexOf(cohort)
      if (cohort.name === cohortNum) {
        this.cohortList.splice(targetIndex, 1)
        return this.cohortList
      }
    }
    return Error('this cohort do not exist')
  }
}

module.exports = CohortManager
