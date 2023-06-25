class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }
}

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohortByName(cohortName) {
    if (typeof cohortName !== 'string' || cohortName.length < 1) {
      console.error('Cannot create cohort, Invalid input.')
      return false
    }

    const duplicate = this.cohorts.find((cohort) => {
      return cohort.name === cohortName
    })

    if (duplicate) {
      console.error(
        'Cannot create cohort, A cohort with that name already exists.'
      )
      return false
    }

    const newCohort = new Cohort(cohortName)
    this.cohorts.push(newCohort)
    return newCohort
  }

  searchCohortByName(cohortName) {
    if (typeof cohortName !== 'string' || cohortName.length < 1) {
      console.error('Cannot search for cohort, Invalid input.')
      return false
    }
    const newArr = []
    this.cohorts.map(cohort => {
      if(cohort.name === cohortName) {
        newArr.push(cohort)
      }
    })

    if(newArr.length !== 0) {
      return newArr
    }

    return false
  }
}

module.exports = {
  CohortManager,
  Cohort
}
