const { Cohort } = require('../src/Cohort')

describe('Cohort class', () => {
  let CohortClass
  beforeEach(() => {
    CohortClass = new Cohort()
  })

  // create
  it('expects the cohort to be created and returned', () => {
    expect(CohortClass.create('Software', 2)).toEqual({
      cohortID: 2,
      name: 'Software',
      students: []
    })
  })
})
