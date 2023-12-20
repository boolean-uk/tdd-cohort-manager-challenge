class Cohort {
  constructor(name) {
    this.students = []
    this.CohortName = name
  }

  addStudent(student) {
    this.students.push(student)
  }

  removeStudentByName(studentId) {
    this.students = this.students.filter(
      (student) => student.name !== studentId
    )
  }
}
export default Cohort
