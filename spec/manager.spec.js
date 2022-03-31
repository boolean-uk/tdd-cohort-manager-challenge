const Manager = require('../src/manager.js')
const Student = require('../src/student.js')

describe('Manager class', () => {
  beforeEach( () => {
    manager = new Manager()
  })

  it('creates a new cohort and adds it to the cohorts array', () => {
    expect(manager.createCohort('Cohort 5')).toEqual('Cohort 5 was created.')
    expect(manager.cohorts.length).toEqual(1)
    expect(manager.cohorts[0].name).toEqual('Cohort 5')
  })

  it('looks for and retrieves a specific cohort from the cohorts array', () => {
    manager.createCohort('Cohort 5')
    const expected = manager.cohorts[0]
    expect(manager.getCohort('Cohort 5')).toEqual(expected)
  })

  it('returns falsy if cohort does not exist in cohorts array', () => {
    manager.createCohort('Cohort 5')
    expect(manager.getCohort('Cohort 1')).toEqual(false)
  })

  it('deletes a specific cohort from the cohorts array', () => {
    manager.createCohort('Cohort 5')
    manager.createCohort('Cohort 1')
    const expected = manager.cohorts[1]
    expect(manager.removeCohort('Cohort 1')).toEqual(expected)
    expect(manager.cohorts.length).toEqual(1)
  })

  it('returns error message if cohort does not exist in cohorts array', () => {
    manager.createCohort('Cohort 5')
    const expected = 'Error: Cohort not found.'
    expect(manager.removeCohort('Cohort 1')).toEqual(expected)
    expect(manager.cohorts.length).toEqual(1)
  })
})