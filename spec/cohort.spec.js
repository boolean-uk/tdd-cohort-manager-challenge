import Cohort from '../src/cohort.js'

describe('createCohort', () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
  })

  it('creates a new cohort with a name', () => {
    // GIVEN
    const cohortName = 'cohort_11'
    // WHEN
    const res = cohort.createCohort('cohort_11')
    // THEN
    expect(res).toEqual(cohortName)
  })
})
