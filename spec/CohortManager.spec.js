import CohortManager from '../src/CohortManager.js'

describe('Cohort Manager', () => {
  it('should create a cohort', function () {
    let cohort = new CohortManager('test')
    expect(cohort.getName()).toBeInstanceOf(String)
    expect(cohort.getName()).toBeTruthy()
  })
})
