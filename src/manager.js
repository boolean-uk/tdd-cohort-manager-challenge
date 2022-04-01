const Cohort = require('./cohort')

class Manager {
  constructor() {
    this.cohorts = []
  }

  findStudentById(id) {
    let student = false
    this.cohorts.forEach((cohort) => {
      const result = cohort.findStudentById(id)
      if (result) {
        student = result
      }
    })
    return student
  }

  addCohort(cohortName) {
    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
  }

  removeCohort(cohortName) {
    function nameFunction(name) {
      return name === cohortName
    }
    const index = this.cohorts.findIndex(nameFunction)
    this.cohorts.splice(index, 1)
    return this.cohorts
  }

  //   addStudent(firstName, lastName, gitHub, cohortName) {
  //     const student = new Student(firstName, lastName, gitHub)
  //     this.cohorts.forEach((cohort, i) => {
  //       if (cohortName === cohort.cohortName) {
  //         cohort.students.push(student)
  //       }
  //     })
  //   }

  addStudent(firstName, lastName, gitHub, cohortName) {
    let addedCohorts = null
    this.cohorts.forEach((cohort, i) => {
      if (cohortName === cohort.cohortName) {
        // found the cohort we want to put student in
        cohort.addStudentToCohort(firstName, lastName, gitHub)
        addedCohorts = cohort
      }
    })
    if (addedCohorts === null) {
      return 'Not found'
    }
    return addedCohorts
  }

  removeStudent(gitHub, cohortName) {
    this.cohorts.forEach((cohort) => {
      if (cohortName === cohort.cohortName) {
        cohort.students.forEach((student, i) => {
          if (student.gitHub === gitHub) {
            cohort.students.splice(i, 1)
          }
        })
      }
    })
    return 'Enter valid cohort and student data'
  }
}
module.exports = Manager
