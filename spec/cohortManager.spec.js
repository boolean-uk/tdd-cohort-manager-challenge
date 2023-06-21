const CohortManager = require('../src/cohortManager.js')

describe('Cohort Manager', () => {
  let app

  beforeEach(() => {
    app = new CohortManager()
  })

  it('creates a new cohort', () => {
    const expected = {
      id: 1,
      cohortName: 'cohort10',
      students: []
    }
    const result = app.addCohort('cohort10')
    expect(result).toEqual(expected)
  })
  it('cohort manager has no cohorts', () => {
    const expected = []
    const result = app.cohorts
    expect(result).toEqual(expected)
  })

  it('search for a specific cohort', () => {
    app.addCohort('cohort05')
    app.addCohort('cohort06')
    app.addCohort('cohort07')
    const result = app.searchByCohortName('cohort05')
    expect(result).toBeTrue()
  })
  it('error message when cohort name does not exist', () => {
    app.addCohort('cohort05')
    app.addCohort('cohort06')
    app.addCohort('cohort07')
    const result = () => app.searchByCohortName('cohort10')
    expect(result).toThrowError('Cohort was not found')
  })
})
