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

  it('should throw an error when trying to serach for a non existent cohort', () => {
    cohortList.add('cohort12')
    cohortList.add('cohort13')
    cohortList.add('cohort14')

    expect(() => cohortList.search('cohort15')).toThrow('cohort not found')
  })

  it('should remove a cohort', () => {
    cohortList.add('cohort12')
    cohortList.add('cohort13')
    cohortList.add('cohort14')

    expect(cohortList.cohorts.length).toBe(3)

    const removed = cohortList.remove('cohort13')

    expect(removed.cohortName).toBe('cohort13')
    expect(cohortList.cohorts.length).toBe(2)
    expect(cohortList.cohorts[0].cohortName).toBe('cohort12')
    expect(cohortList.cohorts[1].cohortName).toBe('cohort14')
  })

  it('should throw an error when trying to remove a non existent cohort', () => {
    cohortList.add('cohort12')
    cohortList.add('cohort13')
    cohortList.add('cohort14')

    expect(() => cohortList.remove('cohort15')).toThrow('cohort not found')
  })
})
