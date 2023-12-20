import Student from '../src/Student.js'

class Cohort {
  constructor(name) {
    this.students = []
    this.CohortName = name
  }

  addStudent(student) {
    this.students.push(student)
  }

  searchCohort(name, cohortsArray) {
    return cohortsArray.find((cohort) => cohort.CohortName === name)
  }
}

export default Cohort
