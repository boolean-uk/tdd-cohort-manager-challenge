const Cohort = require("../src/cohort.js")

class CohortManager {
    constructor(cohortName) {
        this.cohortName = cohortName
        this.cohorts = []
    }

    addCohort(cohortName) {
        const newCohort = {
            name: cohortName,
            students: []
        }
        this.cohorts.push(newCohort)
        return this.cohorts
    }

    searchCohort(cohortName) {
        //search for cohort 4
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].name === cohortName) {
                return this.cohorts[i]
            }
        }
    }

    removeCohort(name) {
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].name === name) {
                this.cohorts.splice(i, 1)
            }
        }
        return this.cohorts
    }




}
module.exports = CohortManager