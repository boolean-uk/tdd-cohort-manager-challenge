
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

}


export default CohortManager
