import Cohort from '../src/cohort.js'

describe('Cohort:', () => {
  describe('new instance -', () => {
    it('valid name input & capacity input', () => {
      const cohort = new Cohort('Potato', 16)

      const expected = {
        name: 'Potato',
        cohortId: 1,
        capacity: 16
      }

      expect(cohort.details).toEqual(expected)
    })
  })
})
