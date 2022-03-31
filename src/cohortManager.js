// const Student = require("./student.js");

class CohortManager {
    constructor() {
       this.cohortClasses = [] 
    }

    add(cohort) {
        this.cohortClasses.push(cohort)
    }

    remove() {
        
    }
}

module.exports = CohortManager