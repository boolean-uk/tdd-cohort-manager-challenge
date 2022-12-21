const { CohortManager } = require('../src/CohortManager')

describe('CohortManager', () => {
  it('Create an instance of the CohortManager class', () => {
    const cohorts = new CohortManager()

    expect(cohorts).toBeInstanceOf(CohortManager)
  })
})
