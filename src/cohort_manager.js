const Cohorts = require('./cohorts.js')
const Student = require('./student.js')

class CohortManager {
  constructor () {
    this.cohortList = []
  }

  createCohort (cohortName) {
    const cohortToAdd = new Cohorts(cohortName)
    this.cohortList.push(cohortToAdd)
    // console.log("COHORT LIST: ",this.cohortList)
    return this.cohortList
  }

  searchByCohortName (cohortName) {
    // console.log("COHORT LIST: ", this.cohortList);
    let cohortFound = false
    let cohort
    for (let i = 0; i < this.cohortList.length; i++) {
      // console.log("ITERATION: ", i, "   COHORT: ", this.cohortList[i]);
      if (this.cohortList[i].name === cohortName) {
        cohortFound = true
        cohort = this.cohortList[i]
        break
      }
    }
    if (cohortFound === false) {
      return 'COHORT NOT FOUND'
    }
    return cohort
  }

  addStudent (cohortName, studentName, gitHub, email) {
    const newStudent = new Student(studentName, gitHub, email)
    // console.log("NEW STUDENT: ", newStudent);
    // console.log("COHORT LIST BEFORE: ", this.cohortList);
    let updatedCohort
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohortName) {
        this.cohortList[i].students.push(newStudent)
        updatedCohort = this.cohortList[i]
      }
    }
    // console.log("COHORT LIST AFTER: ", this.cohortList);
    // console.log("UPDATED COHORT - RETURN THIS: ", updatedCohort)
    return updatedCohort
  }

  removeCohort (cohortName) {
    // console.log("COHORT LIST: ", this.cohortList)
    let cohortFound = false
    for (let i = 0; i < this.cohortList.length; i++) {
      // console.log("ITERATION: ",i,"COHORT at i: ", this.cohortList[i])
      if (this.cohortList[i].name === cohortName) {
        this.cohortList.splice(i, 1)
        cohortFound = true
        return this.cohortList
      }
    }
    if (cohortFound === false) {
      return 'NOT A VALID COHORT NAME'
    }
  }

  removeStudent (cohort, student) {
    let theCohort = null
    for (let i = 0; i < this.cohortList.length; i++) {
      if (this.cohortList[i].name === cohort) {
        theCohort = this.cohortList[i]
      }
    }
    for (let i = 0; i < theCohort.students.length; i++) {
      // console.log("ITERATION: ", i, "COHORT at i: ", theCohort.students[i]);
      if (theCohort.students[i].firstName === student) {
        theCohort.students.splice(i, 1)
      }
    }
    // console.log("THE UPDATED COHORT: ", theCohort);
    return theCohort
  }
}

module.exports = CohortManager
