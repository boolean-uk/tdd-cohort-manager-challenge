const CohortManager = require('../src/CohortManager.js')

describe('CohortManager', () => {
  let CM

  beforeEach(() => {
    CM = new CohortManager()
  })

  it('should create a new cohort w/ user input as name', () => {
    CM.createCohort('coolest cohort')
    const result = CM.getAllCohorts()
    expect(result).toEqual([
      {
        name: 'coolest cohort',
        students: []
      }
    ])
  })
  it('should throw an error if user makes a new cohort w/ an existing cohorts name', () => {
    CM.createCohort('cohort1')
    expect(() => CM.createCohort('cohort1')).toThrow(
      new Error('A cohort with this name already exists')
    )
  })
})
