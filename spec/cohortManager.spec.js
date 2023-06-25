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

  it('searchCohortByName returns all matching results', () => {
    cohortManager.createCohortByName('Cohort 1')
    cohortManager.createCohortByName('Cohort 2')
    cohortManager.createCohortByName('Cohort 3')
    cohortManager.createCohortByName('Cohort 4')
    cohortManager.createCohortByName('Cohort 1 and 2')

    const res = cohortManager.searchCohortByName('Cohort 1')
    expect(...res).toBeInstanceOf(Cohort)
  })

  it('searchCohortByName returns false if no matches', () => {
    cohortManager.createCohortByName('Cohort 1')
    cohortManager.createCohortByName('Cohort 2')
    cohortManager.createCohortByName('Cohort 3')
    cohortManager.createCohortByName('Cohort 4')
    cohortManager.createCohortByName('Cohort 1 and 2')

    const res = cohortManager.searchCohortByName('Cohort 5')
    expect(res).toEqual(false)
  })

  it('searchCohortByName returns false if invalid input', () => {
    cohortManager.createCohortByName('Cohort 1')
    cohortManager.createCohortByName('Cohort 2')
    cohortManager.createCohortByName('Cohort 3')
    cohortManager.createCohortByName('Cohort 4')
    cohortManager.createCohortByName('Cohort 1 and 2')

    const res = cohortManager.searchCohortByName(612)
    expect(res).toEqual(false)
  })
})
