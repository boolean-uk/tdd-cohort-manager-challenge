const Cohort = require('./cohort')
const Student = require('./student.js')

class Manager {
  constructor () {
    this.cohorts = []
  }

  addCohort (cohortName) {
    const cohort = new Cohort(cohortName)
    this.cohorts.push(cohort)
  }

  addStudent (firstName, lastName, gitHub, cohortName) {
    const student = new Student(firstName, lastName, gitHub)
    this.cohorts.forEach((cohort, i) => {
      if (cohortName === cohort.cohortName) {
        cohort.students.push(student)
      }
    })
  }

  removeStudent (gitHub, cohortName) {
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
