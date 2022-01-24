const STUDENTS = require("./students.json")
const Cohort = require("./cohort")

class CohortManager {
    constructor() {
        this.cohorts = []

    }

    createCohort(name) {
        const createCohort = new Cohort(name)
        this.cohorts.push(createCohort)
        //console.log(createCohort)
    }


    searchAll(name) {
        for (let i = 0; i < this.cohorts.length; i++)
            if (this.cohorts[i] === name) {
                return this.cohorts
            }
    }


    addStudents(cohortname, firstname, lastname) {
        
    }
    // get student objects from student class into particular cohort




    /*
removeStudent(cohortName)
    // 

returnError(name)
    //


*/
}
module.exports = CohortManager