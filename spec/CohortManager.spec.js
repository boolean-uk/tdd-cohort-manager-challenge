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
    console.log(Manager)
  })

  it('Creates a cohort with a cohort name', () => {
    const result = Manager.createCohort('Cohort 7')
    const error = Manager.createCohort(7)
    expect(result).toEqual([
      {
        name: 'Cohort 7',
        students: []
      }
    ])
    expect(error).toEqual(TypeError(`${7} must be a string`))
  })
})
