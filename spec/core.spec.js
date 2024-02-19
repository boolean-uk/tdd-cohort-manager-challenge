import CohortManager from '../src/cohortManager.js'
describe('Test core criteria', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should be able to add cohort', function () {
    cohortManager.addCohort('cohort 1')
    expect(cohortManager.cohorts).toEqual([{ name: 'cohort 1', students: [] }])
  })
})
