const CohortManager = require('../src/CohortManager.js')

describe('Testing CohortManager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('createCohort creates a new cohort', () => {
    // Setup
    // Execution
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    const result = cohortManager.cohorts.length
    // Check
    expect(result).toEqual(2)
  })

  it('createCohort returns error if cohort name already exists', () => {
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

  it('findCohort returns cohort if it exists', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    cohortManager.createCohort('Cohort 3')
    // Execution
    const result = cohortManager.findCohort('Cohort 2')
    // Check
    expect(result.name).toBe('Cohort 2')
    expect(result.id).toBe(2)
  })

  it('findCohort returns error if not found', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    // Execution
    // Check
    expect(() =>
      cohortManager.findCohort('Cohort 2').toThrowError('Cohort not found')
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
