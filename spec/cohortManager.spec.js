const { CohortManager, Cohort } = require('../src/cohortManager.js')

describe('Cohort manager', () => {
  let newCohortManager

  beforeEach(() => {
    newCohortManager = new CohortManager()
  })

  it('should create a new cohort', () => {
    // setup
    const cohortsArray = [
      {
        idCohort: 0,
        nameCohort: 'Frontend Cohort',
        maxStudents: 24,
        students: []
      }
    ]

    // execute
    const expected = newCohortManager.cohorts.cohortsArray
    const result = newCohortManager.createCohort('Frontend Cohort')

    // verify
    expect(result).toEqual(expected)
  })
})
