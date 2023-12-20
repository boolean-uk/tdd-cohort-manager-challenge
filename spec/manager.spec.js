import { Manager } from '../src/manager.js'
import { Cohort } from '../src/cohort.js'

fdescribe('Manager', () => {
  let manager
  beforeEach(() => {
    manager = new Manager()
  })
  it('updates the list property', () => {
    const cohort = new Cohort('purple')
    const result = manager.setList(cohort)
    expect(result[0].id).toEqual(1)
    expect(result[0].cohortName).toEqual('purple')
    expect(result[0].students).toEqual([])
  })
})
