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

  it('looks and retrieves a specific cohort from the cohorts array', () => {
    manager.createCohort('Cohort 5')
    const expected = manager.cohorts[0]
    expect(manager.getCohort('Cohort 5')).toEqual(expected)
  })

  it('returns falsy if cohort does not exist in cohorts array', () => {
    manager.createCohort('Cohort 5')
    expect(manager.getCohort('Cohort 1')).toEqual(false)
  })
})