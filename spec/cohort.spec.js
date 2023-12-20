import { Cohort } from '../src/cohort.js'

describe('cohort', () => {
  it('creates a new instance of cohort with a name, an id, and an empty student list as properties', () => {
    const result = new Cohort('best cohort ever')
    expect(result.id).toBeUndefined()
    expect(result.cohortName).toEqual('best cohort ever')
    expect(result.students).toEqual([])
  })
  it('throws an error and does not create an instance of Cohort() when the input is missing', () => {
    const result = () => new Cohort()
    expect(result).toThrowError('cohort could not be created - missing input')
  })
})
