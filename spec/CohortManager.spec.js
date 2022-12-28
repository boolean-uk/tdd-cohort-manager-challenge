const CohortManager = require('../src/CohortManager.js')
const Cohort = require('../src/Cohort.js')
// const Student = require('../src/Student.js')
// const Student = require('..src/Student.js')
describe('Cohort Manager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('can create a cohort', () => {
    const expected = new Cohort('Cohort1')
    const result = cohortManager.createCohort('Cohort1')
    expect(result).toEqual([expected])
  })
  it('can search for a cohort', () => {
    const expected = new Cohort('Cohort1')
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    const result = cohortManager.searchCohort('Cohort1')
    expect(result).toEqual(expected)
  })
  it('return error if the cohort does not exist', () => {
    const expected = 'Error : No cohort found!'
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    const result = cohortManager.searchCohort('Cohort5')
    expect(result).toEqual(expected)
  })
  it('removes a cohort from the list', () => {
    const expected = 'This cohort has been removed: Cohort 1'
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    const result = cohortManager.removeCohort('Cohort 1')
    expect(result).toEqual(expected)
  })

  it('throws error if cohort does not exist', () => {
    const expected = 'Error: cohort does not exist'
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('cohort 2')
    const result = cohortManager.removeCohort('Cohort 60')
    expect(result).toEqual(expected)
  })
})
