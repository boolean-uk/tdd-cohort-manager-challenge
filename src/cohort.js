
class Cohort {
    
constructor(cohortname){
this.cohortname = cohortname
this.students = []
this.capacity = 24
}

getCohort(cohortname){
   return this.cohortname === cohortname
    }




}

module.exports = Cohort