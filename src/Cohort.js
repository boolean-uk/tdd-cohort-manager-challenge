class Cohort {
  constructor(cohortName, capacity = 24) {
    this.cohortName = cohortName
    this.studentInside = []
    this.capacity = capacity
  }

  addStudent(student) {
    this.studentInside.push(student)
    return `${student.firstName} is now inside Cohort ${this.cohortName}`
  }
}

module.exports = Cohort
