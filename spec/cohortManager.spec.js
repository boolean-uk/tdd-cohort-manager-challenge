const { CohortManager, Cohort, Student } = require('./../src/cohortManager.js')

describe('cohortManager', () => {
  it('should pass', () => {
    expect(true).toEqual(true)
  })
})

describe('Cohort Manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should create a cohort with a name', () => {
    // setup
    const Cohort1 = new Cohort('Cohort 1')
    const expected = [Cohort1]
    // execute
    const result = cohortManager.createCohort('Cohort 1')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should search for a cohort by name', () => {
    // setup
    const Cohort2 = new Cohort('Cohort 2')
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    const expected = Cohort2
    // execute
    const result = cohortManager.findCohort('Cohort 2')
    // verify
    expect(result).toEqual(expected)
  })

  it('Should search for a cohort by name, but return an error if no cohort found', () => {
    // setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    const expected = `No cohort with this name`
    // execute
    const result = cohortManager.findCohort('Cohort 3')
    // verify
    expect(result).toEqual(expected)
  })
})
