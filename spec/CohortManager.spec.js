const CohortManager = require('../src/CohortManager.js')
const Cohort = require('../src/Cohort.js')

// const Student = require('..src/Student.js')
describe('Cohort Manager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('Cohort manager can create a cohort with a cohort name and add it to the cohort list', () => {
    const expected = new Cohort('Cohort1')
    const result = cohortManager.createCohort('Cohort1')
    expect(result).toEqual([expected])
  })
  it('can search for a cohort by cohort name', () => {
    const expected = new Cohort('Cohort1')
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    const result = cohortManager.searchCohort('Cohort1')
    expect(result).toEqual(expected)
  })
})
