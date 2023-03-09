const { Cohort, Manager } = require('../src/index')

describe('CohortManager', () => {
  let NewCohort
  beforeEach(() => {
    NewCohort = new Manager()
  })

  it('create new cohort', () => {
    NewCohort.createNewCohort('software dev')
    NewCohort.createNewCohort('cyber security')
    expect(NewCohort.cohorts.length).toEqual(2)
  })
})
