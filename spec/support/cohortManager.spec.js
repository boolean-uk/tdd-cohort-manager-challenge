const CohortManager = require('../../src/cohortManager')

describe('Test cohort manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('should create a cohort name', () => {
    // set up
    const namesCohort = 'Cohort 10'
    // execute
    const cohort = cohortManager.createCohort(namesCohort)

    // verify
    expect(cohortManager.cohorts.length).toBe(1)
    expect(cohort.name).toBe(namesCohort)
    expect(cohort.students).toEqual([])
  })
})
