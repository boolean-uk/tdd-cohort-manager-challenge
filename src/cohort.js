class Cohort {
  constructor (name) {
    this.cohortName = name
    this.studentList = []
    this.cohortCapacity = 24
  }

  isFull () {
    if (this.studentList.length < this.cohortCapacity) {
      return false
    }
    return true
  }
}

module.exports = Cohort
