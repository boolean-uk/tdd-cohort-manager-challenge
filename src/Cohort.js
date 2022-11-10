class Cohort {
  constructor(cohortName, capacity = 24) {
    this.cohortName = cohortName
    this.studentInside = []
    this.capacity = capacity
  }

  addStudent(student) {
    this.studentInside.push(student)
    return `${student.name} is now inside Cohort ${this.cohortName}`
  }

  removeStudent(student) {
    const cohortIndex = this.studentInside.indexOf(student)
    this.studentInside.splice(cohortIndex, 1)
  }
}

module.exports = Cohort
