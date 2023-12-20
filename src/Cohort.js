class Cohort {
  constructor(name) {
    this.students = []
    this.CohortName = name
  }

  addStudent(student) {
    this.students.push(student)
  }
}

export default Cohort
