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

  it('Should be able to get cohort', function () {
    cohortManager.addCohort('cohort 1')
    expect(cohortManager.getCohort('cohort 1')).toEqual({
      name: 'cohort 1',
      students: []
    })
    expect(cohortManager.getCohort('cohort 2')).toBeUndefined()
  })

  it('Should be able to remove cohort', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addCohort('cohort 2')
    cohortManager.removeCohort('cohort 1')
    expect(cohortManager.cohorts).toEqual([{ name: 'cohort 2', students: [] }])
    expect(() => cohortManager.removeCohort('cohort 1')).toThrow()
  })
})
