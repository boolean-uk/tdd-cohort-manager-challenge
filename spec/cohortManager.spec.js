const CohortManager = require('../src/cohortManager')
const Cohort = require('../src/cohort')

describe('Cohort manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager([], [])
  })

  it('Create a cohort with name', () => {
    // SETUP
    const expected = [new Cohort('Apple'), new Cohort('Pear')]

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')
    const result = cohortManager.getCohorts()

    // VERIFY
    expect(result).toEqual(expected)
  })

  it('Removes a cohort', () => {
    // SETUP
    const expected = [new Cohort('Pear')]

    // EXECUTE
    cohortManager.createCohort('Apple')
    cohortManager.createCohort('Pear')

    cohortManager.removeCohort('Apple')
    const result = cohortManager.getCohorts()

    // VERIFY
    expect(result).toEqual(expected)
  })
})
