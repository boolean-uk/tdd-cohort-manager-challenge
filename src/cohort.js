class Cohort {
  constructor(cohortName) {
    this.cohortName = cohortName
    this.studentList = []
  }

  addStudent(student) {
    this.studentList.push(student)
    return this.studentList
  }

  removeStudent() {}
}
module.exports = Cohort
