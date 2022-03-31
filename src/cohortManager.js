class CohortManager {
    constructor() {
       this.cohortClasses = [cohort1, cohort2]
    }
    
    add(cohortN) {
        console.log('here:',cohortN)
        this.cohortClasses.push(cohortN)
        return this.cohortClasses
    }
    
    
    foundCohort(cohortN) {
        for ( let i=0 ; i < this.cohortClasses.length; i++) {
            if (cohortN === this.cohortClasses[i].cohortN) {    
                return this.cohortClasses[i]
            }
        }
        return this.errorMessage
    }
    
    remove(cohortN) {
        const errorMessage = 'cohort not found!'
        for ( let i=0 ; i < this.cohortClasses.length; i++) {
            if (cohortN === this.cohortClasses[i].cohortName) {
                return this.cohortClasses.splice(i, 1)[0]
                // return this.cohortClasses[i]
            }
        }
        return errorMessage
    }
}

module.exports = CohortManager