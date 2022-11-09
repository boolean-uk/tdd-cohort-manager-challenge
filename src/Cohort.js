const defaultMaxCohortCapacity = 24
class Cohort {
  constructor(name, capacity = defaultMaxCohortCapacity) {
    this.name = name
    this.cohortCapacity = capacity
    this.studentList = []
  }

  seeStudentList() {
    console.log(this.studentList)
  }
}

module.exports = Cohort
