const CohortDetainment = require('../src/cohortManager.js')

describe('CohortDetainment', () => {
  let cd
  beforeEach(() => {
    cd = new CohortDetainment()
  })

  describe('createCohort(@String)', () => {
    it('Expects a Cohort to be created', () => {
      const expected = { team1: [] }
      expect(cd.createCohort('team1')).toEqual(expected)
    })
  })

  describe('searchForCohort(@String)', () => {
    it('Expects to find a specific Cohort by name', () => {
      const expected = { team1: [] }
      cd.createCohort('team1')
      expect(cd.searchForCohort('team1')).toEqual(expected)
    })
  })
})
