import Cohorts from '../src/index.js'

describe('cohorts', () => {
  let cohorts
  beforeEach(() => (cohorts = new Cohorts()))

  it('is an instance of Cohorts', () => {
    expect(cohorts).toBeInstanceOf(Cohorts)
  })

  it('is created with an empty array', () => {
    expect(cohorts.cohorts.length).toBe(0)
  })

  it('has an ID counter that starts at 1', () => {
    expect(cohorts.idCounter).toBe(1)
  })
})
