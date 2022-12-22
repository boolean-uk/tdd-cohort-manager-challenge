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
    CM.createCohort('cohort 1')
    expect(() => CM.createCohort('cohort 1')).toThrow(
      new Error('A cohort with this name already exists')
    )
  })

  it('should return the cohort obj w/matching name as the user inputs', () => {
    CM.createCohort('cohort 8')
    const result = CM.searchForCohortBy('cohort 8')
    expect(result).toEqual({
      name: 'cohort 8',
      students: []
    })
  })

  it('should throw error if a cohort w/ user input name does not exist', () => {
    CM.createCohort('cohort 8')

    expect(() => CM.searchForCohortBy('cohort 1')).toThrow(
      new Error('A cohort with this name does NOT exist')
    )
  })
})
