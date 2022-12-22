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

  it('addStudentToCohort adds a student to the specificed cohort', () => {
    cohortManager.createCohort('Super Cohort')

    cohortManager.createStudent(
      'chew',
      'bacca',
      'rawr',
      'walkingcarpet@rebelalliance.net'
    )

    const updatedCohort = cohortManager.addStudentToCohort(1, 'Super Cohort')

    const expected = {
      firstName: 'chew',
      lastName: 'bacca',
      githubUsername: 'rawr',
      email: 'walkingcarpet@rebelalliance.net',
      id: 1,
      cohort: 'Super Cohort'
    }

    expect(updatedCohort.students[0]).toEqual(
      jasmine.objectContaining(expected)
    )
  })

  it('removeCohort successfully removes a cohort from the cohortList', () => {
    cohortManager.createCohort('Super Cohort')

    cohortManager.removeCohort('Super Cohort')

    expect(cohortManager.cohortList).toEqual([])
  })

  it('removeCohort returns the removed cohort', () => {
    cohortManager.createCohort('Super Cohort')

    const removedCohort = cohortManager.removeCohort('Super Cohort')

    const expected = {
      name: 'Super Cohort',
      cohortCapacity: 24,
      students: [],
      id: 1
    }

    expect(removedCohort).toEqual(jasmine.objectContaining(expected))
  })

  it('removeStudent removes an existing student from the specified cohort', () => {
    cohortManager.createCohort('Super Cohort')

    cohortManager.createStudent(
      'chew',
      'bacca',
      'rawr',
      'walkingcarpet@rebelalliance.net'
    )

    cohortManager.addStudentToCohort(1, 'Super Cohort')
    cohortManager.removeStudent(1, 'Super Cohort')

    const cohortStudents = cohortManager.cohortList[0].students

    expect(cohortStudents).toEqual([])
  })

  it('removeStudent throws an error if there is no student with the searched name in that cohort', () => {
    cohortManager.createCohort('Super Cohort')

    cohortManager.createStudent(
      'chew',
      'bacca',
      'rawr',
      'walkingcarpet@rebelalliance.net'
    )

    expect(() => cohortManager.removeStudent(1, 'Super Cohort')).toThrowError(
      'There is no student with that name in this cohort'
    )
  })

  it('searchStudenstById should return the correct student if that student exists', () => {
    cohortManager.createStudent(
      'chew',
      'bacca',
      'rawr',
      'walkingcarpet@rebelalliance.net'
    )

    cohortManager.createStudent(
      'darth',
      'vader',
      'darthycodes',
      'darkside@imperial.com'
    )

    const searchedStudent = cohortManager.searchStudentById(2)

    const expected = {
      firstName: 'darth',
      lastName: 'vader',
      githubUsername: 'darthycodes',
      email: 'darkside@imperial.com',
      id: 2,
      cohort: 'unassigned'
    }

    expect(searchedStudent).toEqual(jasmine.objectContaining(expected))
  })

  it('searchStudentById throws an error if that student does not exist', () => {
    expect(() => cohortManager.searchStudentById(2)).toThrowError(
      'No students found!'
    )
  })
})
