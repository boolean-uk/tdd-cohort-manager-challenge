let counter = 0

class Cohort {
  constructor(name) {
    this.name = name
    this.cohortCapacity = 24
    this.students = []
    this.id = counter++
  }
}

module.exports = { Cohort }
