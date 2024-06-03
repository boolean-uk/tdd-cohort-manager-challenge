import 'jasmine-expect'
import Cohort from './Cohort.js'
import findDuplicateStudent from './functions/findDuplicateStudent.js'

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

  addStudent(cohortName, firstName, lastName, githubUsername, email) {
    if (
      findDuplicateStudent(
        firstName,
        lastName,
        githubUsername,
        email,
        this.cohorts
      )
    ) {
      throw new Error('This student already exists')
    }

    const targetCohort = this.cohorts.find(
      (cohort) => cohort.name === cohortName
    )
    if (targetCohort) {
      targetCohort.addStudent(firstName, lastName, githubUsername, email)
    } else {
      throw new Error('No cohort found with that name')
    }
  }

  removeCohort(name) {
    const cohortToRemove = this.cohorts.find((cohort) => cohort.name === name)
    if (cohortToRemove) {
      const index = this.cohorts.indexOf(cohortToRemove)
      this.cohorts.splice(index, 1)
    } else {
      throw new Error('No cohort found with that name')
    }
  }
}

export default CohortManager
