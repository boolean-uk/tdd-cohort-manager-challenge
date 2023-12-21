import CohortManager from '../src/cohortManager.js'
import Cohort from '../src/cohort.js'
import Student from '../src/student.js'

describe('Cohort Manager:', () => {
  let cohort

  beforeEach(() => {
    cohort = new CohortManager()
  })

  it('create cohort with cohort name', () => {
    const expected = new Cohort('Cohort-1')

    const result = cohort.createCohort('Cohort-1')

    expect(result).toEqual(expected)
  })

  it("shouldn't create a cohort with same name as any other cohort", () => {
    const expected = 'Cohort-1 already exists'
    cohort.createCohort('Cohort-1')
    const result = cohort.createCohort('Cohort-1')

    expect(result).toEqual(expected)
  })

  it('should throw error with invalid input when creating a cohort', () => {
    expect(() => cohort.createCohort(1)).toThrowError(
      "Please input a valid name e.g. 'cohort-11'"
    )
  })

  it('find cohort by cohort name', () => {
    const expected = new Cohort('Cohort-1')

    cohort.createCohort('Cohort-1')
    const result = cohort.findCohortByName('Cohort-1')

    expect(result).toEqual(expected)
  })

  it('should throw error with invalid input when finding a cohort', () => {
    expect(() => cohort.findCohortByName([])).toThrowError(
      "Please input a valid name e.g. 'cohort-11'"
    )
  })

  it('should return a string if cohort does not exist with findCohort()', () => {
    expect(() => cohort.findCohortByName('cohort-99')).toThrowError(
      'Cohort does not exist'
    )
  })

  it('add student to cohort', () => {
    cohort.createCohort('cohort-1')

    const expected = cohort.cohorts.find(
      (cohort) => cohort.name === 'cohort-1'
    ).students

    const result = cohort.addStudentToCohort(
      {
        firstName: 'Kye',
        lastName: 'Yee',
        github: '@yee0802',
        email: 'ky@mail.com'
      },
      'cohort-1'
    )

    expect(result).toEqual(expected)
  })

  it('should throw error if cohort is not found in addStudentToCohort', () => {
    expect(() =>
      cohort.addStudentToCohort(
        {
          firstName: 'Kye',
          lastName: 'Yee',
          github: '@yee0802',
          email: 'ky@mail.com'
        },
        'cohort'
      )
    ).toThrowError('Cohort does not exist')
  })

  it('should throw error if student input is invalid', () => {
    expect(() => cohort.addStudentToCohort({}, 'cohort-11')).toThrowError(
      "Please input a valid student e.g. {firstName: 'John', lastName: 'Doe', github: '@johndoe', email:'johndoe@mail.com'}"
    )
  })

  it('removes cohort by cohort name', () => {
    const expected = 'cohort-11 removed successfully'

    cohort.createCohort('cohort-11')
    const result = cohort.removeCohortByName('cohort-11')

    expect(result).toEqual(expected)
  })

  it('should throw error if cohort does not exist', () => {
    expect(() => cohort.removeCohortByName('cohort-moon')).toThrowError(
      'Cohort does not exist'
    )
  })

  it('should throw error if input is invalid', () => {
    expect(() => cohort.removeCohortByName(1)).toThrowError(
      "Please input a valid name e.g. 'cohort-11'"
    )
  })

  it('removes student from specific cohort', () => {
    const expected = 'Kye successfully removed from cohort-1'

    cohort.createCohort('cohort-1')
    cohort.addStudentToCohort(
      {
        firstName: 'Kye',
        lastName: 'Yee',
        github: '@yee0802',
        email: 'ky@mail.com'
      },
      'cohort-1'
    )

    const result = cohort.removeStudentFromCohort(1, 'cohort-1')

    expect(result).toEqual(expected)
  })

  it('should throw error if input is invalid when removing a student', () => {
    expect(() => cohort.removeStudentFromCohort([], 2)).toThrowError(
      "Please input a valid studentID & cohort name e.g. (3,'cohort-11')"
    )
  })

  it('should throw error if student is not found', () => {
    cohort.createCohort('cohort-1')
    expect(() => cohort.removeStudentFromCohort(5, 'cohort-1')).toThrowError(
      'Student does not exist'
    )
  })

  it('should throw error if cohort not found', () => {
    expect(() => cohort.removeStudentFromCohort(1, 'cohort-moon')).toThrowError(
      'Cohort does not exist'
    )
  })

  it('finds student by id', () => {
    const expected = new Student(
      1,
      'John',
      'Doe',
      '@johndoe',
      'johndoe@mail.com'
    )

    cohort.createCohort('cohort-11')
    cohort.addStudentToCohort(
      {
        firstName: 'John',
        lastName: 'Doe',
        github: '@johndoe',
        email: 'johndoe@mail.com'
      },
      'cohort-11'
    )
    const result = cohort.findStudentById(1, 'cohort-11')

    expect(result).toEqual(expected)
  })

  it('should throw error if student not found using findStudentById()', () => {
    cohort.createCohort('cohort-11')
    expect(() => cohort.findStudentById(2, 'cohort-11')).toThrowError(
      'Student does not exist'
    )
  })

  it('should throw error if cohort does not exist using findStudentById()', () => {
    expect(() => cohort.findStudentById(2, 'cohort-11')).toThrowError(
      'Cohort does not exist'
    )
  })
})
