// DELETE THIS FILE AFTER YOU HAVE MADE YOUR FIRST COMMIT WHICH CONTAINS YOUR OWN TESTS AND CODE
import CohortManager, { Cohort } from '../src/DELETEME.js'
describe('CohortManger', () => {
  let cohort

  beforeEach(() => {
    cohort = new CohortManager()
  })

  it('should exist', () => {
    expect(cohort).toBeInstanceOf(CohortManager)
  })

  it('should create a new cohort', () => {
    const result = cohort.createCohort('cohort 12')

    expect(result).toBeInstanceOf(Cohort)
    expect(result.id).toBe(1)
    expect(result.cohortName).toBe('cohort 12')

  })
})
