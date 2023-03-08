class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
    this.idCounter = 0
  }

  incrementID() {
    this.idCounter = this.idCounter + 1
    return this.idCounter
  }
}

module.exports = CohortManager
