class CohortManager {
  constructor() {
    this.cohortList = []
  }

  createCohort(name) {
    if (typeof name !== 'string') {
      return new TypeError(`${name} must be a string`)
    }
    const newCohort = {
      name: name,
      students: []
    }
    this.cohortList.push(newCohort)
    return this.cohortList
  }
}

console.log(new TypeError('must be a string'))

module.exports = CohortManager
