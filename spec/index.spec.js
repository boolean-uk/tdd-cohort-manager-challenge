import Cohorts, { Cohort } from '../src/index.js'

describe('cohorts', () => {
  let cohorts
  beforeEach(() => (cohorts = new Cohorts()))

  it('is an instance of Cohorts', () => {
    expect(cohorts).toBeInstanceOf(Cohorts)
  })

  it('is created with an empty array', () => {
    expect(cohorts.cohorts.length).toBe(0)
  })

  it('can create a new Cohort with the specified name', () => {
    cohorts.createCohort('1')

    expect(cohorts.cohorts[0].name).toBe('1')
    expect(cohorts.cohorts[0]).toBeInstanceOf(Cohort)
  })

  it('can succesfully add a student to a cohort', () => {
    cohorts.createCohort('1')

    cohorts.addStudent('Angus', '1')

    expect(cohorts.cohorts[0].students[0].name).toBe('Angus')
  })

  it('can remove a cohort using the name of the cohort', () => {
    cohorts.createCohort('1')
    cohorts.createCohort('2')

    cohorts.removeCohort('1')

    expect(cohorts.cohorts[0].name).toBe('2')
  })

  it('can remove a student from a cohort', () => {
    cohorts.createCohort('1')

    cohorts.addStudent('Angus', '1')

    cohorts.removeStudent('1', 1)

    expect(cohorts.cohorts[0].students.length).toBe(0)
  })

  it('throws an error if the cohort cannot be found', () => {
    expect(() => {
      cohorts.removeCohort('1')
    }).toThrow(Error('Cohort not found'))
  })

  it('throws an error if the cohort cannot be found when removing a student', () => {
    expect(() => {
      cohorts.removeStudent('Angus', '1')
    }).toThrow(Error('Cohort not found'))
  })

  it('throws an error if the student cannot be found when removing a student', () => {
    cohorts.createCohort('1')

    expect(() => {
      cohorts.removeStudent('1', 'Angus')
    }).toThrow(Error('Student not found'))
  })

  it('throws an error if another cohort is created with the same name', () => {
    cohorts.createCohort('1')
    expect(() => {
      cohorts.createCohort('1')
    }).toThrowError()
  })
})
