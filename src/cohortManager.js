class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
    this.students = []
  }

  addStudent(student) {
    this.students.push(student)
    console.log(
      `Added student ${student.firstName} ${student.lastName} to ${this.cohortName}`
    )
  }

