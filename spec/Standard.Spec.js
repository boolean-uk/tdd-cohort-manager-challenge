describe('Cohort Manager Standard Critera:', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = require('../src/CohortManager.js')
  })

  it('Creates a cohort with a cohort name', () => {
    expect(cohortManager.create('Test').name).toEqual('Test')
  })

  it('Finds a specific cohort by name', () => {
    cohortManager.create('Test')
    expect(cohortManager.find('Test')).toEqual({ name: 'Test', students: [] })
  })
})
