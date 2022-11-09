const CohortManager = require('../src/CohortManager.js')

/*
- Search for student by student ID
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- Cohorts can't have the same name, and can't exist without a name
- The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results
*/

describe('CohortManager Class', () => {
  let Manager
  beforeEach(() => {
    Manager = new CohortManager()
  })

  it('Search for student by student ID', () => {})
  it('Not accept more than 24 students in a cohort', () => {})
  it('Cohorts must have a name, and can not be a duplicate', () => {})
  it('Students can not be in multiple cohorts', () => {})
  it('Students can not be removed from cohorts they are not in', () => {})
  it('Can search for students by name and return all matching results', () => {})
})
