import CohortsManager, { Cohort, Student } from '../src/cohort.js'

describe('CohortManager', () => {
  let cohortsManager

  beforeEach(() => {
    cohortsManager = new CohortsManager()
  })

  it('should exist', () => {
    expect(cohortsManager).toBeInstanceOf(CohortsManager)
  })

  it('should create a new cohort', () => {
    cohortsManager.createCohort('boolean-12')

    expect(cohortsManager.cohorts.length).toBe(1)
    expect(cohortsManager.cohorts[0].name).toBe('boolean-12')
  })

  it('should search for a cohort by cohort name', () => {
    cohortsManager.createCohort('boolean-11')
    cohortsManager.createCohort('boolean-12')

    const result = cohortsManager.findCohort('boolean-12')

    expect(result.name).toBe('boolean-12')
  })

  it('should throw an error if the cohort to remove is not found', () => {
    expect(() => cohortsManager.findCohort('boolean-13')).toThrow(
      new Error('The boolean-13 cohort is not found!')
    )
  })

  it('should add student to a specific cohort', () => {
    cohortsManager.createCohort('boolean-12')

    const student1 = new Student(
      'Hamada',
      'Abdelaal',
      'hamada-ab',
      'hamada@boolean.uk'
    )

    cohortsManager.addStudent('boolean-12', student1)

    expect(cohortsManager.cohorts[0].name).toBe('boolean-12')
    expect(cohortsManager.cohorts[0].students.length).toBe(1)
    expect(cohortsManager.cohorts[0].students[0].firstName).toBe('Hamada')
  })

  it('should throw an error when adding a student to a cohort that does not exist', () => {
    cohortsManager.createCohort('boolean-12')

    const student1 = new Student(
      'Hamada',
      'Abdelaal',
      'hamada-ab',
      'hamada@boolean.uk'
    )

    expect(() => cohortsManager.addStudent('boolean-13', student1)).toThrow(
      new Error('The boolean-13 cohort is not found!')
    )
  })

  it('should remove a cohort by cohort name', () => {
    cohortsManager.createCohort('boolean-11')
    cohortsManager.createCohort('boolean-12')

    cohortsManager.removeCohort('boolean-11')

    expect(cohortsManager.cohorts.length).toBe(1)
  })

  it('should throw an error when the chohort to remove does not exist', () => {
    expect(() => cohortsManager.removeCohort('boolean-11')).toThrow(
      new Error('The boolean-11 cohort is not found!')
    )
  })

  it('should remove student from a specific cohort', () => {
    cohortsManager.createCohort('boolean-12')

    const student1 = new Student(
      'Hamada',
      'Abdelaal',
      'hamada-ab',
      'hamada@boolean.uk'
    )

    cohortsManager.addStudent('boolean-12', student1)

    cohortsManager.removeStudent('boolean-12', 'ha-hamada-ab')

    expect(cohortsManager.cohorts[0].students.length).toBe(0)
  })

  it('should throw an error when removing student does not exist', () => {
    cohortsManager.createCohort('boolean-12')

    expect(() =>
      cohortsManager.removeStudent('boolean-12', 'ha-hamada-ab')
    ).toThrow(
      new Error(
        `The student with id 'ha-hamada-ab' is not found in this cohort! Please check the cohort name and the student's ID`
      )
    )
  })
  // ----
})
