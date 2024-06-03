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

  it('should throw an error when remove unexist cohort', () => {
    expect(() => cohortManager.removeCohort('Cohort 12')).toThrowError(
      'cohortName not found'
    )
  })

  it('should throw an error when remove unexist student', () => {
    cohortManager.createCohort('Cohort 12')

    expect(() => cohortManager.removeStudent(1, 1)).toThrowError(
      'studentID not found'
    )
  })

  it('should throw an error when remove student from unexist cohort', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.addStudent(
      'Leonardo',
      'Lodi',
      'LeonardoSaraceli',
      'leonardolodi09@gmail.com',
      1
    )

    expect(() => cohortManager.removeStudent(1, 2)).toThrowError(
      'cohortID not found'
    )
  })

  it('should search for a student', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.addStudent(
      'Leonardo',
      'Lodi',
      'LeonardoSaraceli',
      'leonardolodi09@gmail.com',
      1
    )

    expect(cohortManager.searchStudent(1, 1)).toEqual(
      new Student(
        1,
        'Leonardo',
        'Lodi',
        'LeonardoSaraceli',
        'leonardolodi09@gmail.com'
      )
    )
  })

  it('should throw an error for search unexist student', () => {
    cohortManager.createCohort('Cohort 12')

    expect(() => cohortManager.searchStudent(1, 1)).toThrowError(
      'studentID not found'
    )
  })

  it('should throw an error for search student from unexist cohort', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.addStudent(
      'Leonardo',
      'Lodi',
      'LeonardoSaraceli',
      'leonardolodi09@gmail.com',
      1
    )

    expect(() => cohortManager.searchStudent(1, 2)).toThrowError(
      'cohortID not found'
    )
  })

  it('should throw an error for adding more than 24 students to a cohort', () => {
    cohortManager.createCohort('Cohort 12')

    for (let i = 0; i < 24; i++) {
      cohortManager.addStudent(
        `Leonardo${i}`,
        `Lodi${i}`,
        `LeonardoSaraceli${i}`,
        `leonardolodi${i}@gmail.com`,
        1
      )
    }

    expect(() =>
      cohortManager.addStudent(
        'Leonardo',
        'Lodi',
        'LeonardoSaraceli',
        'leonardolodi09@gmail.com',
        1
      )
    ).toThrowError('adding students is not possible beyond the 24 limit')
  })

  it('should throw an error for create cohort already created', () => {
    cohortManager.createCohort('Cohort 12')

    expect(() => cohortManager.createCohort('Cohort 12')).toThrowError(
      'cohortName already exists'
    )
  })

  it('should throw an error for create cohort without a name', () => {
    expect(() => cohortManager.createCohort('')).toThrowError(
      'cohortName not provided'
    )
  })

  it('should throw an error for add student already added', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.addStudent(
      'Leonardo',
      'Lodi',
      'LeonardoSaraceli',
      'leonardolodi09@gmail.com',
      1
    )
    cohortManager.createCohort('Cohort 16')

    expect(() =>
      cohortManager.addStudent(
        'Leonardo',
        'Lodi',
        'LeonardoSaraceli',
        'leonardolodi09@gmail.com',
        2
      )
    ).toThrowError('the student is already in a cohort')
  })

  it('should throw an error for remove student that is not in the first place', () => {
    cohortManager.createCohort('Cohort 12')

    for (let i = 0; i < 2; i++) {
      cohortManager.addStudent(
        `Leonardo${i}`,
        `Lodi${i}`,
        `LeonardoSaraceli${i}`,
        `leonardolodi${i}@gmail.com`,
        1
      )
    }

    expect(() => cohortManager.removeStudent(2, 1)).toThrowError(
      'student can not be removed as it is not present in the first place'
    )
  })

  it('should search for all students first and last name', () => {
    cohortManager.createCohort('Cohort 12')
    cohortManager.addStudent(
      'Leonardo',
      'Lodi',
      'LeonardoSaraceli',
      'leonardolodi09@gmail.com',
      1
    )
    cohortManager.createCohort('Cohort 16')
    cohortManager.addStudent(
      'Pedro',
      'Lodi',
      'PedroSaraceli',
      'pedrolodi10@gmail.com',
      2
    )

    expect(cohortManager.searchAllStudents('Leonardo', 'Lodi')).toEqual([
      new Student(
        1,
        'Leonardo',
        'Lodi',
        'LeonardoSaraceli',
        'leonardolodi09@gmail.com'
      ),
      new Student(1, 'Pedro', 'Lodi', 'PedroSaraceli', 'pedrolodi10@gmail.com')
    ])
  })
})
