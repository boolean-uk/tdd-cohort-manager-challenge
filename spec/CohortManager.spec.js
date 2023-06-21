const CohortManager = require('../src/CohortManager.js')

describe('Cohort Manager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('create a cohort if it does not exist', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    // execution
    // check
    expect(cohortManager.cohorts.length).toEqual(1)
  })

  it('throw an error if the cohort does exist', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    // execution
    // check
    expect(() => cohortManager.createCohort('Cohort 1')).toThrowError(
      'Cohort already exists'
    )
  })
})
