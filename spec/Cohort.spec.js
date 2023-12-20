import Cohort from '../src/Cohort.js'
// contains the whole cohort tests
describe('cohort', () => {
  // creating a new cohort with a specific name
  it('should create a cohort with a given name', () => {
    const cohort = new Cohort('Cohort 1')
    expect(cohort.CohortName).toBe('Cohort 1')
  })
  // seraching for a cohort by the name
  it('searching for a cohort by name', () => {
    const cohort1 = new Cohort('Cohort 1')
    const cohortsArray = [cohort1]
    const searchResult = cohort1.searchCohort('Cohort 1', cohortsArray)
    expect(searchResult.CohortName).toBe('Cohort 1')
  })
})
