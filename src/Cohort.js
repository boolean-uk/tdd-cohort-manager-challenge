class Cohort {
  constructor(name, id) {
    this.name = name
    this.cohortCapacity = 24
    this.students = []
    this.id = id
  }
}

module.exports = { Cohort }
