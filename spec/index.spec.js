import CohortList, { Cohort } from '../src/index.js'

describe('CohortList', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortList()
  })

  it('should exist', () => {
    expect(cohortList).toBeInstanceOf(CohortList)
  })

  it('should create a new cohort', () => {
    const result = cohortList.add('cohort12')

    expect(result).toBeInstanceOf(Cohort)
    expect(result.cohortName).toBe('cohort12')
    expect(cohortList.cohorts.length).toBe(1)
  })

  it('should be able to search for a cohort', () => {
    cohortList.add('cohort12')

    const result = cohortList.search('cohort12')

    expect(result.cohortName).toBe('cohort12')
  })
})
