import Cohort from '../src/cohort.js'

describe('createCohort', () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
  })

  it('creates a new cohort with a name', () => {
    // GIVEN
    const cohortName = 'cohort_11'
    const cohortList = [cohortName]
    // WHEN
    const res = cohort.createCohort('cohort_11')
    // THEN
    expect(res).toEqual(cohortList)
  })

  it('creates a different cohort', () => {
    const cohortName = 'cohort_12'
    const cohortList = [cohortName]
    const res = cohort.createCohort('cohort_12')
    expect(res).toEqual(cohortList)
  })

  it('does not create a cohort if the given name already exists', () => {
    cohort.createCohort('cohort_12')
    const res = cohort.createCohort('cohort_12')
    expect(res).toEqual('cohort already exists')
    expect(cohort.cohortList.length).toEqual(1)
  })
})
