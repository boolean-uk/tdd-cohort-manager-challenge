const { Cohort } = require('../src/Cohort')

describe('Cohort', () => {
  it('Creates an instance of the cohort class', () => {
    const testCohort = new Cohort('Cohort 1')

    expect(testCohort).toBeInstanceOf(Cohort)
  })
})
