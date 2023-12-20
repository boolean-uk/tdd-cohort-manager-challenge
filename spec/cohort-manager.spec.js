import CohortManager from '../src/cohort-manager.js'

describe('Cohort Manger', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  describe('/ createCohort', () => {
    it('/ creates a new cohort', () => {
      cohortManager.createCohort('Cohort 1')
      const result = cohortManager.cohortList[0].name
      expect(result).toEqual('Cohort 1')
    })

    it('/ no parameter inputed', () => {
      const expected = 'Cohort needs a name!'
      expect(() => cohortManager.createCohort('')).toThrowError(expected)
    })
  })
})
