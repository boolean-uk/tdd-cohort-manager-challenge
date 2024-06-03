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
})
