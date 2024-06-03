import CohortList from '../src/index.js'

describe('CohortList', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortList()
  })

  it('should exist', () => {
    expect(cohortList).toBeInstanceOf(CohortList)
  })
})
