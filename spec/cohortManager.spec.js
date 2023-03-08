const { CohortManager, Cohort } = require('../src/cohortManager.js')

describe('Cohort manager', () => {
  let newCohortManager

  beforeEach(() => {
    newCohortManager = new CohortManager()
  })

  it('(1) should create a new cohort', () => {
    // setup
    const cohortsArray = [
      {
        IDCohort: 1,
        nameCohort: 'Frontend Cohort',
        maxStudents: 24,
        students: []
      },
      {
        IDCohort: 2,
        nameCohort: 'Backend Cohort',
        maxStudents: 24,
        students: []
      }
    ]
    // execute
    const expected = newCohortManager.cohorts.cohortsArray

    // verify
    expect(
      newCohortManager.createCohort('Frontend Cohort'),
      newCohortManager.createCohort('Backend Cohort')
    ).toEqual(expected)
  })

  it('(2) should return a cohort searched for by name', () => {
    // setup
    newCohortManager.createCohort('Frontend Cohort')
    newCohortManager.createCohort('Backend Cohort')
    // execute
    const expected = (newCohortManager.cohorts = [
      {
        IDCohort: 1,
        nameCohort: 'Frontend Cohort',
        maxStudents: 24,
        students: []
      }
    ])

    const result = newCohortManager.searchCohort('Frontend Cohort')

    // verify
    expect(result).toEqual(expected)
  })
})
