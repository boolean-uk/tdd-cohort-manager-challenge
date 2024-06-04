// eslint-disable-next-line no-unused-vars
import CohortManager, { Cohort } from '../src/cohort.js'

describe('CohortManager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('should exist', () => {
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })

  it('should create a cohort with a cohort name', () => {
    const result = cohortManager.createCohort('Class of 24')

    expect(result).toBeInstanceOf(Cohort)
    expect(result.name).toBe('Class of 24')
  })

  it('should search for a cohort by cohort name', () => {
    const result1 = cohortManager.createCohort('Class of 24')
    const result2 = cohortManager.search('Class of 24')

    expect(result1).toBeInstanceOf(Cohort)
    expect(result1.name).toBe('Class of 24')
    expect(result2).toBeInstanceOf(Cohort)
    expect(result2.name).toBe('Class of 24')
    expect(result1).toBe(result2)
  })
})
