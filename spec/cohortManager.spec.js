import CohortManager from '../src/cohortManager.js'

describe('Cohort Manager Application', () => {
  let cmanager

  beforeEach(() => {
    cmanager = new CohortManager()
  })

  it('should create a new cohort', () => {
    // GIVEN
    const newCohort = { cohortName: 'Cohort 1', students: [] }
    // WHEN
    const createCohort = cmanager.createNewCohort('Cohort 1')
    // THEN
    expect(createCohort).toEqual(newCohort)
  })
})
