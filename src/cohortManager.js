// const Student = require("./student.js");

class CohortManager {
    constructor() {
       this.cohortClasses = [] 
    }

    add(cohortN) {
        this.cohortClasses.push(cohortN)
    }

    errorMessage = 'cohort not found!'

    foundCohort(cohortN) {
        for ( let i=0 ; i < this.cohortClasses.length; i++) {
            if (cohortN === this.cohortClasses[i].cohortN) {    
                return this.cohortClasses[i]
            }
        }
        return this.errorMessage
    }

    remove(cohortN) {
        for ( let i=0 ; i < this.cohortClasses.length; i++) {
            if (cohortN === this.cohortClasses[i].cohortN) {
                this.cohortClasses.splice(i, 1)
            }
        }
        return this.errorMessage
    }
}

module.exports = CohortManager