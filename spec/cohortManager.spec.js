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

  describe('searchCohort', () => {
    it('by name', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      const expected = 'Cohort 1 found'

      // EXECUTE
      const result = cohortManager.searchCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('cohort does not exist', () => {
      // SETUP
      const expected = 'Cohort 1 does not exist'

      // EXECUTE
      const result = cohortManager.searchCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })
  })
})
