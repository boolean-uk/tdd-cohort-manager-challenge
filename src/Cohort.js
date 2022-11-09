class Cohort {
  constructor(cohortName, capacity = 24) {
    this.cohortName = cohortName
    this.studentInside = []
    this.capacity = capacity
  }
}

module.exports = Cohort
