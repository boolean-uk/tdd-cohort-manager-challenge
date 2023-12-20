import Cohort from '../../src/cohort.js'

describe('Cohort', () => {
  let cohort

  beforeEach(() => {
    cohort = new Cohort()
  })

  describe('when creating a new cohort', () => {
    it('a valid cohort name is entered and returns true', () => {
      // set up

      // execute
      const result = cohort.createCohort('Cohort 1')

      // verify
      expect(result).toBeTrue()
    })

    it('a valid cohort name is entered and the cohort is added to cohortList', () => {
      // set up
      const expected = [{ name: 'Cohort 1', students: [] }]

      // execute
      cohort.createCohort('Cohort 1')
      const result = cohort.cohortList

      // verify
      expect(result).toEqual(expected)
    })

    it('when an invalid cohortName is entered throw error', () => {
      // set up

      // execute/verify
      expect(() => cohort.createCohort()).toThrowError(
        'cohort name must be a valid string'
      )
    })
  })
})
