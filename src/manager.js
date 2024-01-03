import Cohort from "./cohort.js";

class Manager {
    constructor(cohorts, students) {
        this.cohorts = [];
        this.students = [];
    }

    createCohort(cohortName) {
        if (typeof cohortName !== 'string') return 'ERROR: cohortName is not a string'
        
        const exists = this.cohorts.some(c => c.name === cohortName)
        
        if (exists) return 'ERROR: cohort already exists'
        
        const cohort = { name: cohortName, students: [] }
        this.cohorts.push(cohort)
        return true
    }

    removeCohort(cohortName) {
        if (typeof cohortName !== 'string') return 'ERROR: cohortName is not a string'
        const exists = this.cohorts.forEach((c, index) => {
            if (c.name === cohortName) {
                this.cohorts.splice(index, 1)
            }
        });
        if (!exists) return `ERROR: cohort doesn't exist by that name`

        return true
    }
}

export default Manager;