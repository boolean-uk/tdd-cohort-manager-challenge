class CohortManager {
    constructor () {
      this.cohorts = []
      this.students = []
    }
  
    createCohort (name) {
      this.cohorts.push(name)
      return this.cohorts
    }
  
    searchCohort (name) {
      for (let i = 0; i < this.cohorts.length; i++) {
        if (this.cohorts[i] === name) {
          return this.cohorts[i]
        }
      }
      return "Cohort doesn't exist"
    }
  
    createStudent (newStudent) {
      this.students.push(newStudent)
      return this.students
    }
  
    addStudentToCohort (cohort) {
      for (let i = 0; i < this.cohorts.length; i++) {
        if (this.cohorts[i] === cohort) {
          this.cohorts.push(this.students[i])
        }
      }
      return this.cohorts
    }
  
    //  removeCohortName()
  
    //  removeStudentFromCohort()
  
    //  isExisting()
  }
  
  module.exports = CohortManager