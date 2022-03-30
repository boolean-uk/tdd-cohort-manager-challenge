class Cohort {
  constructor(name, id) {
    this.students = []
    this.name = name
    this.id = id
    this.maxCapacity = 3
  }
}

module.exports = Cohort
