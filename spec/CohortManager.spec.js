const CohortManager = require('../src/CohortManager.js')

/*
- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found
*/

describe('CohortManager Class', () => {
  let Manager
  beforeEach(() => {
    Manager = new CohortManager()
  })

  it('Creates a cohort with a cohort name', () => {
    const result = Manager.createCohort('Cohort 7')
    expect(result).toEqual([
      {
        name: 'Cohort 7',
        students: []
      }
    ])
    expect(() => Manager.createCohort(7)).toThrow(
      new TypeError(`${7} must be a string`)
    )
  })

  it('Searches for a cohort with a cohort name', () => {
    Manager.createCohort('Cohort 7')
    const resultFullString = Manager.searchForCohort('Cohort 7')
    const resultSubString = Manager.searchForCohort('7')
    expect(resultFullString).toEqual({
      name: 'Cohort 7',
      students: []
    })
    expect(resultSubString).toEqual({
      name: 'Cohort 7',
      students: []
    })
    expect(() => Manager.searchForCohort(7)).toThrow(
      new TypeError(`${7} is not a string, must search for a string`)
    )
    expect(() => console.log(Manager.searchForCohort('Cohort 8'))).toThrow(
      new Error('no match found')
    )
  })
})
