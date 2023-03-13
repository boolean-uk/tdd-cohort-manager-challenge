const students = require('../src/students')

class Cohort {
  constructor(cohortName, students = []) {
    this.cohortName = cohortName
    this.students = students
  }

  addStudent(studentId) {
    this.students.push(students[studentId])
  }

  newCohort() {
    return { cohortName: this.cohortName, students: this.students }
  }
}

module.exports = Cohort
