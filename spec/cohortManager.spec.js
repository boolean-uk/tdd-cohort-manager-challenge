const { CohortManager, Cohort } = require('../src/cohortManager.js')

describe('CohortManager method', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('createCohortByName returns true when cohort is successfully created', () => {
    const res = cohortManager.createCohortByName('Cohort 1')

    expect(res).toBeInstanceOf(Cohort)
  })

  it('createCohortByName returns false if a cohort with the same name already exists', () => {
    cohortManager.createCohortByName('Cohort 1')
    const res = cohortManager.createCohortByName('Cohort 1')

    expect(res).toEqual(false)
  })

  it('createCohortByName returns false if input is not a string', () => {
    const res = cohortManager.createCohortByName(521)

    expect(res).toEqual(false)
  })
})
