describe('Cohort Manager Standard Critera:', () => {
  let cohortManager

  beforeEach(() => {
    delete require.cache[require.resolve('../src/CohortManager.js')]
    cohortManager = require('../src/CohortManager.js')
  })

  it('Creates a cohort with a cohort name', () => {
    expect(cohortManager.create('Test').name).toEqual('Test')
  })
})
