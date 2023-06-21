const CohortManager = require('../src/CohortManager.js')

describe('Testing CohortManager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Create a new cohort', () => {
    // Setup
    // Execution
    cohortManager.createCohort('Cohort 1')
    const result = cohortManager.cohorts.length
    // Check
    expect(result).toEqual(1)
  })

  it('Returns error if cohort name already exists', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    // Execution
    // Check
    expect(() =>
      cohortManager
        .createCohort('Cohort 1')
        .toThrowError('Cohort name is already in use')
    )
  })
})

// eslint-disable-next-line prettier/prettier
/*
describe('', () => {
  it('', () => {
    // Setup
    // Execution
    // Check
  })
})
*/
