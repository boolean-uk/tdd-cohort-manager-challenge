import Cohort from '../src/cohort.js'

describe('Cohort', () => {
  let cohort

  beforeEach(() => {
    cohort = new Cohort()
  })

  describe('creating a new cohort', () => {
    it('valid cohort name is entered and cohort is added', () => {
      const expected = [{ name: 'Cohort 1', students: [] }]
      cohort.createCohort('Cohort 1')

      const result = cohort.cohortList

      expect(result).toEqual(expected)
    })

    it('invalid cohort name is entered throw error', () => {
      expect(() => cohort.createCohort()).toThrowError(
        'cohort name must be a valid string'
      )
    })
  })
})
