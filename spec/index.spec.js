import CohortManager, { Cohort } from '../src/index.js'

describe('CohortManager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('should create a new cohort', () => {
    const expected = cohortManager.create('Cohort 12')
    expect(expected).toBeInstanceOf(Cohort)
    expect(expected.cohortName).toBe('Cohort 12')
  })
})
