import CohortsManeger, { Cohort, Student } from '../src/cohort.js'

describe('CohortManeger', () => {
  let cohortsManeger

  beforeEach(() => {
    cohortsManeger = new CohortsManeger()
  })

  it('should exist', () => {
    expect(cohortsManeger).toBeInstanceOf(CohortsManeger)
  })

  it('should create a new cohort', () => {
    cohortsManeger.createCohort('boolean-12')

    expect(cohortsManeger.cohorts.length).toBe(1)
    expect(cohortsManeger.cohorts[0].name).toBe('boolean-12')
  })

  it('should search for a cohort by cohort name', () => {
    cohortsManeger.createCohort('boolean-11')
    cohortsManeger.createCohort('boolean-12')

    const result = cohortsManeger.findCohort('boolean-12')

    expect(result.name).toBe('boolean-12')
  })

  it('should throw an error if the cohort to remove is not found', () => {
    expect(() => cohortsManeger.findCohort('boolean-13')).toThrow(
      new Error('The boolean-13 cohort is not found!')
    )
  })
  // ----
})
