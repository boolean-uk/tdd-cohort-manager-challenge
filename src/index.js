class CohortManager {
    constructor() {
      this.cohorts = []
      this.nextCohortId = 1
    }
  
    createCohort(cohortName) {
      if (typeof cohortName !== 'string' || cohortName.length === 0) {
        throw Error('Cohort name must be a non-empty string')
      } else if (
        this.cohorts.some((cohort) => cohort.cohortName === cohortName)
      ) {
        throw Error('Cohort with the same name already exists')
      } else {
        const newCohort = { id: this.nextCohortId++, cohortName, students: [] }
        this.cohorts.push(newCohort)
        return newCohort
      }
    }



    
  searchCohort(cohortName) {
    const foundCohort = this.cohorts.find(
      (cohort) => cohort.cohortName === cohortName
    )
    if (!foundCohort) {
      throw Error('Cohort cant be found!')
    }
    return foundCohort
  }


  removeCohortByName(cohortName) {
    const foundIndex = this.cohorts.findIndex(
      (cohort) => cohort.cohortName === cohortName
    )
    if (foundIndex === -1) {
      throw new Error('cohortName cant be found!')
    }
    this.cohorts.splice(foundIndex, 1)
  }

}

export default CohortManager