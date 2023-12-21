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

}

export default CohortManager