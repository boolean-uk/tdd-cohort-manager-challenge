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
    const searchResult = this.#findCohort(searchQuery.toLowerCase())

    if (searchResult) {
      return searchResult
    }
    throw new Error('no match found')
  }

  removeCohort(cohortName) {
    if (typeof cohortName !== 'string') {
      throw new TypeError(`must be a string`)
    }
    const cohortToRemove = this.#findCohort(cohortName.toLowerCase())
    if (cohortToRemove === undefined) {
      throw new Error('no match found')
    }
    const indexOfCohortToRemove = this.cohortList.indexOf(cohortToRemove)
    this.cohortList.splice(indexOfCohortToRemove, 1)
    return 'Removed successfully'
  }

  #findCohort(searchQuery) {
    return this.cohortList.find((cohort) =>
      cohort.name.toLowerCase().includes(searchQuery)
    )
  }
}

testManager = new CohortManager()

module.exports = CohortManager
