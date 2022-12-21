const { CohortManager } = require('../src/CohortManager')
// const { Cohort } = require('../src/Cohort')

describe('CohortManager', () => {
  const cohortManager = new CohortManager()

  beforeEach(() => {
    cohortManager.cohortList = []
  })

  it('Create an instance of the CohortManager class', () => {
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })

  it('createCohort pushes a cohort into cohortList and returns the new cohort object', () => {
    const test = cohortManager.createCohort('Cohort 1')
    const expected = { name: 'Cohort 1', cohortCapacity: 24, students: [] }

    expect(test).toEqual(jasmine.objectContaining(expected))
    expect(cohortManager.cohortList).toEqual([
      jasmine.objectContaining(expected)
    ])
  })

  it('searchCohorts function returns a cohort object when the cohort exists', () => {
    cohortManager.createCohort('Cohort 1')
    const expected = { name: 'Cohort 1', cohortCapacity: 24, students: [] }

    const searchedCohort = cohortManager.searchCohorts('Cohort 1')

    expect(searchedCohort).toEqual(jasmine.objectContaining(expected))
  })
})
