import Cohort from './cohort.js'

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new Error("please input a valid name e.g. 'cohort-11'")
    }

    const duplicate = this.cohorts.some((cohort) => cohort.name === cohortName)

    if (!duplicate) {
      const cohort = new Cohort(cohortName)
      this.cohorts.push(cohort)

      return this.cohorts.find((cohort) => cohort.name === cohortName)
    } else {
      return `${cohortName} already exists`
    }
  }

  findCohort(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new Error("please input a valid name e.g. 'cohort-11'")
    }

    const hasCohort = this.cohorts.some((cohort) => cohort.name === cohortName)

    if (hasCohort) {
      return this.cohorts.find((cohort) => cohort.name === cohortName)
    } else {
      throw new Error('Cohort does not exist')
    }
  }
}

const c = new CohortManager()

c.createCohort('cohort-11')
console.log(c.findCohort('cohort-11'))

export default CohortManager
