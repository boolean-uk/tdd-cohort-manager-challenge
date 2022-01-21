const Cohort = require('../src/cohort.js')

class CohortManager {

    constructor() {
        this.cohorts = [];
    }
    
    createNewCohort(name) {
        this.cohorts.push(new Cohort(name))
        return this.cohorts
    }
    
    createNewStudent(student) {
        
    }

    searchCohortByName(name) {
        for (const cohort of this.cohorts) {
            if (cohort.cohortName === name) {
                return cohort
            }
        }
        return 'Cohort not found!'
    }

    removeCohortByName(name) {
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].cohortName === name) {
                this.cohorts.splice(i, 1)
            }
            return 'Cohort not found!'
        }
    }

    getAllCohorts() {
        return this.cohorts
    }

}

module.exports = CohortManager;