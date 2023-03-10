const { CohortManager } = require('../src/cohortManager.js')

describe('Errors should be thrown if: ', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('(3) searched cohort does not exist', () => {
    // setup
    const result = () => cohortManager.searchCohort('French Cohort')

    // verify
    expect(result).toThrowError('Cohort not found')
  })

  it('(5) deleteing non-existent cohort', () => {
    // setup

    const result = () => cohortManager.deleteCohort('Backend Cohort')

    // verify
    expect(result).toThrowError('Cohort not found')
  })

  it('(8) attempting to remove a student not found', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () =>
      cohortManager.removeFromCohort('Captain', 'America', 'cohort1')

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(10) student is not found in ID search', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () => cohortManager.findStudentbyID(12)

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(12) trying to add a student to a full cohort', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.cohorts[0].cohortStudentCount = 24

    const result = () =>
      cohortManager.addNewStudent(
        'Bob',
        'Builder',
        'builderB',
        'bob@bob.com',
        'cohort1'
      )

    // verify
    expect(result).toThrowError(
      'Cohort is full. Please assign student to another cohort'
    )
  })

  it('(15) student is not found', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () => cohortManager.findStudentbytName('Alice')

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(16) a cohort name exists already', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    // execute
    const result = () => cohortManager.createCohort('cohort1')
    // verify
    expect(result).toThrowError('This cohort already exists')
  })
})
