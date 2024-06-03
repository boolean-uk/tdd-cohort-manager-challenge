import 'jasmine-expect'
import Cohort from './Cohort.js'

class CohortManager {
  constructor() {
    this.cohorts = []
    this.cohortIdCount = 1
  }

  addCohort(name) {
    const duplicateCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (!duplicateCohort) {
      const cohort = new Cohort(this.cohortIdCount, name)
      this.cohorts.push(cohort)
      this.cohortIdCount++
    } else {
      throw new Error('A cohort already exists with that name')
    }
  }

  findCohort(name) {
    const duplicateCohort = this.cohorts.find((cohort) => cohort.name === name)
    if (duplicateCohort) {
      return duplicateCohort
    } else {
      throw new Error('No cohort found with that name')
    }
  }

  addStudent(cohortName, firstName, lastName) {
    const targetCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )
    if (targetCohort) {
      targetCohort.addStudent(firstName, lastName)
    } else {
      throw new Error('No cohort found with that name')
    }
  }
}

export default CohortManager
