const Cohort = require("../src/cohort.js")

class CohortManager {
    constructor() {
        this.cohorts = []
    }

    addCohort(name) {
        const newCohort = new Cohort(name)
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].cohortName === name) {
                return 'cohort cant have same name'
            }
        }
        this.cohorts.push(newCohort)
        return newCohort
    }

    searchCohort(name) {
        //search for cohort 4
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].cohortName === name) {
                return this.cohorts[i]
            }
        }
    }

    removeCohort(name) {
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].cohortName === name) {
                this.cohorts.splice(i, 1)
            }
        }
        return this.cohorts
    }



}
module.exports = CohortManager