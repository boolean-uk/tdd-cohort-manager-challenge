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

  it('Returns the Cohort Data of a searched cohort', () => {
    // setup
    const cohortName = 'Cohort 1'
    cohortManager.addCohort(cohortName)
    // execute
    const res = cohortManager.searchCohort(cohortName)
    // verify
    expect(res).toEqual(true)
  })

  // unhappy path
  it('Returns the Cohort Does not exist when an invalid Cohort is inputted into the search', () => {
    // setup
    const cohortName = 'Cohort 1'
    const invalidCohortName = 'Cohort 992'
    cohortManager.addCohort(cohortName)
    // execute
    const res = cohortManager.searchCohort(invalidCohortName)
    // verify
    expect(res).toEqual(false)
  })
})
