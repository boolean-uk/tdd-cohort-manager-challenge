const CohortManager = require('../src/cohortManager.js')

describe('cohortManager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('creates a cohort', () => {
    // Set up
    const expected = {
      cohortName: 'Cohort 10',
      students: []
    }
    // Execute
    const result = cohortManager.create('Cohort 10')
    // Verify
    expect(result).toEqual(expected)
  })
})
