class Cohort {
  constructor() {
    this.id = 0
    this.cohortList = []
  }

  newCohort() {
    this.id++
    const item = {
      cohortName: '',
      students: [],
      id: 1
    }
    this.cohortList.push(item)
    return item
  }
}

module.exports = Cohort
