/* eslint-disable no-unused-vars */
import Cohortmanager from '../../src/Cohortmanager.js'
describe('Cohortmanager', () => {
  // eslint-disable-next-line no-unused-vars
  let cohortmanager
  beforeEach(() => {
    cohortmanager = new Cohortmanager()
  })
  describe('creates, search and removes a cohort by cohort name', () => {
    it('creates a cohort by cohort name and returns expected', () => {
      const expected = {
        name: 'cohort 11'
      }

      const result = cohortmanager.create('cohort 11')
      expect(result).toEqual(expected)
    })

    it('searches for a cohort by name and returns the cohort', () => {
      const cohortName = 'cohort 12'

      cohortmanager.create(cohortName)

      const result = cohortmanager.search(cohortName)
      expect(result).toEqual({ name: cohortName })
    })
    it('removes a cohort by name and returns the cohort', () => {
      const cohortName = 'cohort 13'
      cohortmanager.create(cohortName)
      const result = cohortmanager.removeBy(cohortName)
      expect(result).toEqual({ name: cohortName })
    })
  })
})
