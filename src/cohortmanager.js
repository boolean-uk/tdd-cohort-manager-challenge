//const STUDENTS = require("./students.json")
const Cohort = require("./cohort")

class CohortManager {
    constructor() {
    this.cohorts = [] 
    this.capacity = 24
}

createCohort(name){
    const createCohort = new Cohort(name)
     this.cohorts.push(createCohort.cohortname)
     //console.log(this.cohorts)
}

/*
searchCohort(name)
    //search for the parameter passed in this.cohort if it exists if not returnError(?)

addStudents(studentname,cohortname)
    // get student objects from student class into particular cohort

removeStudent(cohortName)
    // 

returnError(name)
    //


*/
}
 module.exports = CohortManager