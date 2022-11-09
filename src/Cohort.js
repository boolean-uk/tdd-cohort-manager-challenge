class Cohort {
  constructor(name, capacity = 15) {
    this.name = name
    this.cohortCapacity = capacity
    this.studentList = []
  }
}

module.exports = Cohort
