const CohortDetainment = require('../src/cohortManager.js')

describe('CohortDetainment', () => {
  let cd
  beforeEach(() => {
    cd = new CohortDetainment()
  })

  describe('createCohort()', () => {
    it('Expects a Cohort to be created', () => {
      const expected = { team1: [] }
      expect(cd.createCohort('team1')).toEqual(expected)
    })
  })
})
