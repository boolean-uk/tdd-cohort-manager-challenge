const CohortManager = require('../src/CohortManager')

describe('cohort manager', () => {
  it('Should contain an unique list of cohorts', () => {
    const manager = new CohortManager()

    manager.createCohort('11')
    manager.createCohort('12')
    manager.createCohort('11')

    expect(manager.cohortsLength).toBe(2)
  })
})
