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
  it('should search cohort by name', () => {
    cohortManager.create('Cohort 10')
    cohortManager.create('Cohort 11')
    cohortManager.create('Cohort 12')

    expect(cohortManager.search('Cohort 12').cohortName).toBe('Cohort 12')
  })
  it('should throw an error if the cohort does not exist', () => {
    expect(() => cohortManager.search('Cohort 13')).toThrow('Cohort not found')
  })
})
