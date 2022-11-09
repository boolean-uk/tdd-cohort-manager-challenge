class CohortManager {
  constructor() {
    this.cohortList = []
  }

  createCohort(name) {
    if (typeof name !== 'string') {
      throw new TypeError(`${name} must be a string`)
    }
    const newCohort = {
      name: name,
      students: []
    }
    this.cohortList.push(newCohort)
    return this.cohortList
  }

  searchForCohort(searchQuery) {
    if (typeof searchQuery !== 'string') {
      throw new TypeError(
        `${searchQuery} is not a string, must search for a string`
      )
    }
    const searchResult = this.cohortList.find((cohort) =>
      cohort.name.includes(searchQuery)
    )
    if (searchResult) {
      return searchResult
    }
    throw new Error('no match found')
  }
}

console.log(new TypeError('must be a string'))

module.exports = CohortManager
