const CohortManager = require('../src/cohortManager.js')

describe('cohortManager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  // Test 1
  it('creates a cohort', () => {
    // Set up
    const expected = [
      {
        cohortName: 'Cohort 9',
        students: []
      },
      {
        cohortName: 'Cohort 10',
        students: []
      }
    ]
    // Execute
    cohortManager.create('Cohort 9')
    const result = cohortManager.create('Cohort 10')
    // Verify
    expect(result).toEqual(expected)
  })

  // Test 2
  it('retruns the cohort data, if it exists', () => {
    // Set up
    const expected = {
      cohortName: 'Cohort 8',
      students: []
    }

    // Execute
    cohortManager.create('Cohort 7')
    cohortManager.create('Cohort 8')
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')
    const result = cohortManager.searchCohort('Cohort 8')

    // Verify
    expect(result).toEqual(expected)
  })

  // Test 3
  it('Throws error message if the cohort being serached does not exist', () => {
    // Set up
    const expected = "The cohort doesn't exist"

    // Execute
    cohortManager.create('Cohort 7')
    cohortManager.create('Cohort 8')
    cohortManager.create('Cohort 9')
    cohortManager.create('Cohort 10')
    const result = cohortManager.searchCohort('Cohort 12')

    // verify
    expect(result).toEqual(expected)
  })
})
