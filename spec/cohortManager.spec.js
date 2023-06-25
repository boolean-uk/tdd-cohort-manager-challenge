const { CohortManager } = require('../src/cohortManager')

describe('Cohort Manager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  describe('addCohort', () => {
    it('create a new cohort with a cohort name', () => {
      // SETUP
      const expected = 'Cohort 1 created'

      // EXECUTE
      const result = cohortManager.addCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })
  })
})
