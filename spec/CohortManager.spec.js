import CohortManager, { Cohort, Student } from '../src/CohortManager.js'

describe('Cohort Manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('should create a cohort', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.createCohort('Cohort 16')

    expect(cohortManager.cohortList).toEqual([
      new Cohort(1, 'Cohort 12', []),
      new Cohort(2, 'Cohort 16', [])
    ])
  })

  it('should search for a cohort', () => {
    cohortManager.createCohort('Cohort 12')

    expect(cohortManager.searchCohort('Cohort 12')).toEqual(
      new Cohort(1, 'Cohort 12', [])
    )
  })

  it('should add student to a cohort', () => {
    cohortManager.createCohort('Cohort 12')

    expect(
      cohortManager.addStudent(
        'Leonardo',
        'Lodi',
        'LeonardoSaraceli',
        'leonardolodi09@gmail.com',
        1
      )
    ).toEqual(
      new Cohort(1, 'Cohort 12', [
        new Student(
          1,
          'Leonardo',
          'Lodi',
          'LeonardoSaraceli',
          'leonardolodi09@gmail.com'
        )
      ])
    )
  })

  it('should remove a cohort', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.createCohort('Cohort 16')
    cohortManager.removeCohort('Cohort 12')

    expect(cohortManager.cohortList).toEqual([new Cohort(2, 'Cohort 16', [])])

    cohortManager.removeCohort('Cohort 16')

    expect(cohortManager.cohortList).toEqual([])
  })

  it('should remove student from cohort', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.addStudent(
      'Leonardo',
      'Lodi',
      'LeonardoSaraceli',
      'leonardolodi09@gmail.com',
      1
    )
    expect(cohortManager.removeStudent(1, 1)).toEqual(
      new Cohort(1, 'Cohort 12', [])
    )
  })

  it('should throw an error for not string provided when create cohort', () => {
    expect(() => cohortManager.createCohort(12)).toThrowError(
      'cohortName not string provided'
    )
  })

  it('should throw an error when search for unexist cohort', () => {
    expect(() => cohortManager.searchCohort('Cohort 12')).toThrowError(
      'cohortName not found'
    )
  })

  it('should throw an error for add student not string provided', () => {
    cohortManager.createCohort('Cohort 12')

    expect(() =>
      cohortManager.addStudent(
        'Leonardo',
        12,
        'LeonardoSaraceli',
        'leonardolodi09@gmail.com',
        1
      )
    ).toThrowError('student not string provided')
  })

  it('should throw an error when add student for unexist cohort', () => {
    expect(() =>
      cohortManager
        .addStudent(
          'Leonardo',
          'Lodi',
          'LeonardoSaraceli',
          'leonardolodi09@gmail.com',
          1
        )
        .toThrowError('cohortID not found')
    )
  })
})
