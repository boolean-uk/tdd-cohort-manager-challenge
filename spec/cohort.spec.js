const Cohorts = require('../src/cohort.js')
describe('addCohort', () => {
  let cohortLi

  beforeEach(() => {
    cohortLi = new Cohorts()
  })
  it('Add new cohort', () => {
    const expected = [{ 'Cohort 1': [] }]

    const result = cohortLi.addCohort('Cohort 1')

    expect(result).toEqual(expected)
  })
  it('Trying to create new Cohort, but name already exist', () => {
    const expected = 'Error: The name already exists'
    cohortLi.addCohort('Cohort 1')
    expect(() => cohortLi.addCohort('Cohort 1')).toThrowError(expected)
  })
  it('Name is empty string', () => {
    const expected = 'Error: Please provide a Cohort name'
    expect(() => cohortLi.addCohort('')).toThrowError(expected)
  })
  it('Cohort list is empty', () => {
    const expected = []
    const result = cohortLi.cohortList
    expect(result).toEqual(expected)
  })
  it('Search cohort by name', () => {
    const expected = { 'Cohort 1': [] }

    cohortLi.addCohort('Cohort 1')
    const result = cohortLi.searchByName('Cohort 1')
    expect(result).toEqual(expected)
  })
  it('Search for a cohort by its name, but name does not exist', () => {
    const expected = 'Error: Cohort name does not exist'

    cohortLi.addCohort('Cohort 2')
    expect(() => cohortLi.searchByName('Cohort 1')).toThrowError(expected)
  })
  it('Search for a cohort by its name, but Cohort list is empty', ()=>{
    const expected = 'ERROR: Cohort List is empty'
    expect(() => cohortLi.searchByName('Cohort 1')).toThrowError(expected)
  })
  it('Remove the cohort by name', () => {
    const expected = [{ 'Cohort 2': [] }, { 'Cohort 3': [] }]

    cohortLi.addCohort('Cohort 1')
    cohortLi.addCohort('Cohort 2')
    cohortLi.addCohort('Cohort 3')
    const result = cohortLi.removeByName('Cohort 1')
    expect(result).toEqual(expected)
  })
  it('trying to remove the cohort but Cohort name does not exist', ()=>{
    const expected = 'Error: Cohort name does not exist'
    cohortLi.addCohort('Cohort 1')
    cohortLi.addCohort('Cohort 2')
    cohortLi.addCohort('Cohort 3')
    expect(() => cohortLi.removeByName('Cohort 4')).toThrowError(expected)

  })
  it('Trying to remove the cohort but Cohort list is empty',()=>{
    const expected = 'ERROR: Cohort List is empty'
    expect(() => cohortLi.removeByName('Cohort 1')).toThrowError(expected)

  })
})
