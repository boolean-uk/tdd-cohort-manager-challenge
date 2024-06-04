import CohortManager from '../src/cohort.js'

describe('CohortManager', () => {
  it('should exist', () => {
    const cohortManager = new CohortManager()
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })
})
