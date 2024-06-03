import CohortManager from '../src/CohortManager.js'

describe('Cohort Manager', () => {
  it('should create an instance of cohort manager', () => {
    const cohort = new CohortManager()
    expect(cohort).toBeInstanceOf(CohortManager)
  })
})
