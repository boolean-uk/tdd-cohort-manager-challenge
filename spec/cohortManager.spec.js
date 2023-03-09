const { CohortManager, Cohort, Student } = require('../src/cohortManager.js')

describe('Cohort manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('(1) should create a new cohort', () => {
    // setup
    const cohortsArray = [
      {
        IDCohort: 1,
        nameCohort: 'Frontend Cohort',
        maxStudents: 24,
        students: []
      },
      {
        IDCohort: 2,
        nameCohort: 'Backend Cohort',
        maxStudents: 24,
        students: []
      }
    ]
    // execute
    const expected = cohortManager.cohorts.cohortsArray

    // verify
    expect(
      cohortManager.createCohort('Frontend Cohort'),
      cohortManager.createCohort('Backend Cohort')
    ).toEqual(expected)
  })

  it('(2) should return a cohort searched for by name', () => {
    // setup
    cohortManager.createCohort('Frontend Cohort')
    cohortManager.createCohort('Backend Cohort')

    // execute
    const expected = (cohortManager.cohorts = [
      {
        IDCohort: 1,
        nameCohort: 'Frontend Cohort',
        maxStudents: 24,
        students: []
      }
    ])
    const result = cohortManager.searchCohort('Frontend Cohort')

    // verify
    expect(result).toEqual(expected)
  })

  it('(3) should return an error if searched cohort does not exist', () => {
    // setup
    const result = () => cohortManager.searchCohort('French Cohort')

    // verify
    expect(result).toThrowError('Cohort not found')
  })

  it('(4) should delete a cohort from cohorts array', () => {
    // setup
    cohortManager.createCohort('Backend Cohort')

    const expected = []
    const result = cohortManager.deleteCohort('Backend Cohort')

    // verify
    expect(result).toEqual(expected)
  })

  it('(5) should return an error if attempting to delete non-existent cohort', () => {
    // setup

    const result = () => cohortManager.deleteCohort('Backend Cohort')

    // verify
    expect(result).toThrowError('Cohort not found')
  })

  it('(6) should create a new student and add to specific cohort', () => {
    // setup
    cohortManager.createCohort('Frontend')

    const expected = {
      studentID: 1,
      cohortID: 'Frontend',
      firstName: 'Bob',
      lastName: 'Builder',
      githubUser: 'builderB',
      email: 'bob@bob.com'
    }

    // execute
    const result = cohortManager.addNewStudent(
      'Bob',
      'Builder',
      'builderB',
      'bob@bob.com',
      'Frontend'
    )
    // verify
    expect(result).toEqual(expected)
  })

  it('(7) should delete a student from a specific cohort', () => {
    // setup

    cohortManager.createCohort('cohort1')

    cohortManager.addNewStudent(
      'Bob',
      'Builder',
      'builderB',
      'bob@bob.com',
      'cohort1'
    )

    cohortManager.addNewStudent(
      'Bob',
      'student2 LN',
      '2nd',
      '2@student.com',
      'cohort1'
    )

    const expected = [
      {
        studentID: 2,
        cohortID: 'cohort1',
        firstName: 'Bob',
        lastName: 'student2 LN',
        githubUser: '2nd',
        email: '2@student.com'
      }
    ]

    const result = cohortManager.removeFromCohort('Bob', 'Builder', 'cohort1')

    // verify
    expect(result).toEqual(expected)
  })

  it('(8) should return an error if attempting to remove a student not found', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () =>
      cohortManager.removeFromCohort('Captain', 'America', 'cohort1')

    // verify
    expect(result).toThrowError('Student not found')
  })
})
