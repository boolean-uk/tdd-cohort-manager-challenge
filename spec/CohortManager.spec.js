const { CohortManager } = require('../src/CohortManager')

describe('CohortManager', () => {
  const cohortManager = new CohortManager()

  beforeEach(() => {
    cohortManager.cohortList = []
    cohortManager.studentList = []
  })

  it('Create an instance of the CohortManager class', () => {
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })

  it('createCohort pushes a cohort into cohortList and returns the new cohort object', () => {
    const test = cohortManager.createCohort('Cohort 1')
    const expected = { name: 'Cohort 1', cohortCapacity: 24, students: [] }

    expect(test).toEqual(jasmine.objectContaining(expected))
    expect(cohortManager.cohortList).toEqual([
      jasmine.objectContaining(expected)
    ])
  })

  it('searchCohorts function returns a cohort object when the cohort exists', () => {
    cohortManager.createCohort('Cohort 1')
    const expected = { name: 'Cohort 1', cohortCapacity: 24, students: [] }

    const searchedCohort = cohortManager.searchCohorts('Cohort 1')

    expect(searchedCohort).toEqual(jasmine.objectContaining(expected))
  })

  it('searchCohorts throws an error if the cohort doesnt exist', () => {
    cohortManager.createCohort('Cohort 1')

    expect(() =>
      cohortManager.searchCohorts('Super Cohort Megateam')
    ).toThrowError('No cohorts found!')
  })

  it('createStudent creates a new Student object and returns that new student', () => {
    const newStudent = cohortManager.createStudent(
      'darth',
      'vader',
      'darthycodes',
      'darkside@imperial.com'
    )

    const expected = {
      firstName: 'darth',
      lastName: 'vader',
      githubUsername: 'darthycodes',
      email: 'darkside@imperial.com',
      id: 1
    }

    expect(newStudent).toEqual(jasmine.objectContaining(expected))
  })

  it('createStudent pushes new students into the studentList array', () => {
    cohortManager.createStudent(
      'darth',
      'vader',
      'darthycodes',
      'darkside@imperial.com'
    )

    cohortManager.createStudent(
      'chew',
      'bacca',
      'rawr',
      'walkingcarpet@rebelalliance.net'
    )

    const expected = {
      firstName: 'chew',
      lastName: 'bacca',
      githubUsername: 'rawr',
      email: 'walkingcarpet@rebelalliance.net',
      id: 2
    }

    expect(cohortManager.studentList[1]).toEqual(
      jasmine.objectContaining(expected)
    )
  })
})
