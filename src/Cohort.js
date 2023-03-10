class Cohort {
  constructor(name) {
    this.name = name
    this.studentsList = []
  }

  getName() {
    return this.name
  }
}

module.exports = Cohort
