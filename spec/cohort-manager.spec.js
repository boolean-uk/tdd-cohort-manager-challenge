import { CohortManager } from '../src/cohort-manager.js'
import { Cohort } from '../src/cohort.js'

describe('Manager', () => {
  let manager
  beforeEach(() => {
    manager = new CohortManager()
  })
  it('updates the list property', () => {
    const cohort = new Cohort('purple')
    const result = manager.setList(cohort)
    expect(result[0].id).toEqual(1)
    expect(result[0].cohortName).toEqual('purple')
    expect(result[0].students).toEqual([])
  })
  it('finds a cohort by name', () => {
    const cohort1 = new Cohort('purple')
    const cohort2 = new Cohort('blue')
    manager.setList(cohort1)
    manager.setList(cohort2)
    const result = manager.searchBy('blue')
    expect(result.cohortName).toEqual('blue')
  })
})
