const CohortManager = require('../src/cohort.js')

describe('CohortManger', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortManager()
  })

  it('Create a new cohort', () => {
    // Given
    const name = 'Cohort 1'
    const expected = [
      {
        cohortName: 'Cohort 1',
        students: []
      }
    ]
    // When
    const res = cohortList.createCohort(name)
    // Then
    expect(res).toEqual(expected)
  })
})
