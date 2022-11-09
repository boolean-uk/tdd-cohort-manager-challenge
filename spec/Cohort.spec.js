const Cohort = require('../src/Cohort')

describe('Cohort', () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort('Test 1')
  })

  it('should return a cohort with the given name', () => {
    expect(cohort).toBeInstanceOf(Cohort)
    expect(cohort.name).toBe('Test 1')
  })
})
