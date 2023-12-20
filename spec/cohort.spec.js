import Cohort from '../src/cohort.js'

describe('cohort', () => {
  describe('creation', () => {
    it('is possible with valid name input', () => {
      const myCohort = new Cohort('#11')
      expect(myCohort.name).toEqual('#11')
      expect(myCohort.students).toEqual([])
    })

    it('creation fails when name is not a string', () => {
      expect(() => new Cohort('')).toThrowError('invalid input')
    })
  })
})
