const { Cohort } = require('../src/Cohort')

describe('CohortManager class', () => {
  let CohortClass
  beforeEach(() => {
    CohortClass = new Cohort()
  })

  // createCohort
  it('expects the cohort to be created', () => {
    expect(CohortClass.create('Software', 2)).toEqual({
      cohortID: 2,
      name: 'Software',
      students: []
    })
  })
})
