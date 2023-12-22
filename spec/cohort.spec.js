import Manager from '../src/manager.js'
import Cohort from '../src/cohort.js'
import Student from '../src/student.js'

describe('Manager', () => {
  let manager

  beforeEach(() => {
    manager = new Manager()
  })

  it('should add a cohort', () => {
    const cohort = new Cohort('Cohort 1')
    manager.addCohort(cohort)
    expect(manager.cohorts.includes(cohort)).toBe(true)
  })
})
