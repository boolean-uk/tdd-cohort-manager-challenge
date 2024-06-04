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
    // eslint-disable-next-line no-unused-vars
    const result = cohortManager.createCohort('class of 2024')
  })
})
