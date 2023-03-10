const { CohortManager } = require('../src/cohortManager.js')

describe('Errors should be thrown if: ', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('(1) searched cohort does not exist', () => {
    // setup
    const result = () => cohortManager.searchCohort('French Cohort')

    // verify
    expect(result).toThrowError('Cohort not found')
  })

  it('(2) deleteing non-existent cohort', () => {
    // setup

    const result = () => cohortManager.deleteCohort('Backend Cohort')

    // verify
    expect(result).toThrowError('Cohort not found')
  })

  it('(3) attempting to remove a student not found', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () =>
      cohortManager.removeFromCohort('Captain', 'America', 'cohort1')

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(4) student is not found in ID search', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () => cohortManager.findStudentbyID(12)

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(5) trying to add a student to a full cohort', () => {
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

  it('(6) student is not found', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () => cohortManager.findStudentbytName('Alice')

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(7) a cohort name exists already', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    // execute
    const result = () => cohortManager.createCohort('cohort1')
    // verify
    expect(result).toThrowError('This cohort already exists')
  })

  it('(8) cohort has not been given a name', () => {
    // setup

    // execute
    const result = () => cohortManager.createCohort()
    // verify
    expect(result).toThrowError('Cohort must be given a name')
  })

  it('(9) student not found in original cohort', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.addNewStudent('Prince', 'Charming', 'cohort1')
    // execute
    // verify
    expect(() =>
      cohortManager.reassignStudentCohort(0, 'cohort1')
    ).toThrowError('Student not found')
    expect(() =>
      cohortManager.reassignStudentCohort(1, 'cohort3')
    ).toThrowError('Cohort not found')
  })
})
