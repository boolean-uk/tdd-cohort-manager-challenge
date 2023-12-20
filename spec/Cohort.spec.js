import Cohort from '../src/Cohort.js'

describe('cohort', () => {
  describe('creating a cohort', () => {
    it('should create a cohort with a given name', () => {
      const cohort = new Cohort('Cohort 1')
      expect(cohort.CohortName).toBe('Cohort 1')
    })
  })
})
