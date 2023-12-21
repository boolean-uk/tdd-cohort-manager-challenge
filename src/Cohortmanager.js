
/* eslint-disable prettier/prettier */
import Cohort from "./Cohort.js"

class CohortManager {
    constructor() {
        this.cohorts = []
    }

    createCohort(cohortName) {
        const chort = new Cohort(cohortName)
        this.cohorts.push(chort)
        return chort
        
    }

    searchCohortByName(cohortName) {
        const foundCohort =  this.cohorts.find((cohort) => cohort.cohortName  === cohortName)
        if(!foundCohort) {
            throw new Error('Cohort cant be found!')
        }
        return foundCohort
    }
}


export default CohortManager
