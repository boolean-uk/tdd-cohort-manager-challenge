// CohortManagerSpec.js
import CohortManager from '../src/cohortManager.js'

describe('CohortManager', () => {
  it('should create a cohort with a given name', () => {
    const cohortManager = new CohortManager()
    const cohortName = 'cohort-1'

    const result = cohortManager.createCohort(cohortName)

    expect(result.name).toBe(cohortName)
    expect(result.students).toEqual([])
  })
})
