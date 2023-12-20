import CohortManager from '../src/cohortManager.js'
import Cohort from '../src/cohort.js'

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
      "please input a valid name e.g. 'cohort-11'"
    )
  })

  it('find cohort by cohort name', () => {
    const expected = new Cohort('Cohort-1')

    cohort.createCohort('Cohort-1')
    const result = cohort.findCohort('Cohort-1')

    expect(result).toEqual(expected)
  })

  it('should throw error with invalid input when finding a cohort', () => {
    expect(() => cohort.findCohort([])).toThrowError(
      "please input a valid name e.g. 'cohort-11'"
    )
  })

  it('should return a string if cohort does not exist with findCohort()', () => {
    expect(() => cohort.findCohort('cohort-99')).toThrowError(
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
})
