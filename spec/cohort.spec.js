import CohortsManeger, { Cohort, Student } from '../src/cohort.js'

describe('CohortManeger', () => {
  let cohortsManeger

  beforeEach(() => {
    cohortsManeger = new CohortsManeger()
  })

  it('should exist', () => {
    expect(cohortsManeger).toBeInstanceOf(CohortsManeger)
  })
  // ----
})
