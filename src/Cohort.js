import Student from '../src/Student.js'

class Cohort {
  constructor(name) {
    this.CohortName = name
    this.students = []
    this.cohort = []
  }

  addStudent(student) {
    this.students.push(student)
  }

  searchCohort(name, cohortsArray) {
    return cohortsArray.find((cohort) => cohort.CohortName === name)
  }
}

export default Cohort
