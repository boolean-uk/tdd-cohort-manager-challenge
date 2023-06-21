const CohortManager = require('../src/cohortManager')

describe('Cohorts', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('Returns True when a cohort is successfully created', () => {
    // setup
    const cohortName = 'Cohort 1'
    // execute
    const res = cohortManager.addCohort(cohortName)
    // verify
    expect(res).toEqual(true)
  })
})
