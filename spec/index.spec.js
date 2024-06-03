import CohortManager, { Cohort } from '../src/index.js'

describe('cohort manager', () => {
  let cohortManager
  beforeEach(() => (cohortManager = new CohortManager()))

  it('is an instance of Cohorts', () => {
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })

  it('is created with an empty array', () => {
    expect(cohortManager.cohorts.length).toBe(0)
  })

  it('can create a new Cohort with the specified name', () => {
    cohortManager.createCohort('1')

    expect(cohortManager.cohorts[0].name).toBe('1')
    expect(cohortManager.cohorts[0]).toBeInstanceOf(Cohort)
  })

  it('can succesfully add a student to a cohort', () => {
    cohortManager.createCohort('1')

    cohortManager.addStudent(
      {
        firstName: 'Angus',
        lastName: 'Townsley',
        email: 'angustownsley@gmail.com',
        username: 'angustownsley'
      },
      '1'
    )

    expect(cohortManager.cohorts[0].students[0].firstName).toBe('Angus')
  })

  it('can remove a cohort using the name of the cohort', () => {
    cohortManager.createCohort('1')
    cohortManager.createCohort('2')

    cohortManager.removeCohort('1')

    expect(cohortManager.cohorts[0].name).toBe('2')
  })

  it('can remove a student from a cohort', () => {
    cohortManager.createCohort('1')

    const student = cohortManager.addStudent(
      {
        firstName: 'Angus',
        lastName: 'Townsley',
        email: 'angustownsley@gmail.com',
        username: 'angustownsley'
      },
      '1'
    )

    cohortManager.removeStudent('1', student.id)

    expect(cohortManager.cohorts[0].students.length).toBe(0)
  })

  it('throws an error if the cohort cannot be found', () => {
    expect(() => {
      cohortManager.removeCohort('1')
    }).toThrow(Error('Cohort not found'))
  })

  it('throws an error if the cohort cannot be found when removing a student', () => {
    expect(() => {
      cohortManager.removeStudent('1', 'Angus')
    }).toThrow(Error('Cohort not found'))
  })

  it('throws an error if the student cannot be found when removing a student', () => {
    cohortManager.createCohort('1')

    expect(() => {
      cohortManager.removeStudent('1', 'Angus')
    }).toThrow(Error('Student not found'))
  })

  it('throws an error if another cohort is created with the same name', () => {
    cohortManager.createCohort('1')
    expect(() => {
      cohortManager.createCohort('1')
    }).toThrow(
      Error(
        'Cohort already exists with this name, please ensure each name is unique'
      )
    )
  })

  it('throws an error if student is already enrolled in a cohort', () => {
    cohortManager.createCohort('1')

    cohortManager.addStudent(
      {
        firstName: 'Angus',
        lastName: 'Townsley',
        email: 'angustownsley@gmail.com',
        username: 'angustownsley'
      },
      '1'
    )

    expect(() => {
      cohortManager.addStudent(
        {
          firstName: 'Angus',
          lastName: 'Townsley',
          email: 'angustownsley@gmail.com',
          username: 'angustownsley'
        },
        '1'
      )
    }).toThrow(Error('Student already enrolled'))
  })

  it('throws an error if cohort at maximum size', () => {
    cohortManager.createCohort('1')

    cohortManager.cohorts[0].students = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24
    ]

    expect(() => {
      cohortManager.addStudent(
        {
          firstName: 'Angus',
          lastName: 'Townsley',
          email: 'angustownsley@gmail.com',
          username: 'angustownsley'
        },
        '1'
      )
    }).toThrow(Error('Cohort at maximum size'))
  })
})
