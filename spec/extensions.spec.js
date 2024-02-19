import CohortManager from '../src/cohortManager.js'
describe('Test core criteria', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should be able to search for student by StudentID', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addStudentToCohort('student', '1', 'cohort 1')
    cohortManager.addStudentToCohort('student', '2', 'cohort 1')
    expect(cohortManager.getStudentById(0)).toEqual({
      id: 0,
      firstname: 'student',
      lastname: '1'
    })
    expect(cohortManager.getStudentById(1)).toEqual({
      id: 1,
      firstname: 'student',
      lastname: '2'
    })
  })

  it('Adding more than 24 students to a cohort should throw an error', function () {
    cohortManager.addCohort('cohort 1')
    for (let i = 0; i < 24; i++) {
      cohortManager.addStudentToCohort(`student`, `${i}`, 'cohort 1')
    }
    expect(() =>
      cohortManager.addStudentToCohort('student', '25', 'cohort 1')
    ).toThrow()
  })

  it('Cohort name is required', function () {
    expect(() => cohortManager.addCohort()).toThrow()
  })

  it('Cohort name already exists', function () {
    cohortManager.addCohort('cohort 1')
    expect(() => cohortManager.addCohort('cohort 1')).toThrow()
  })

  it('Student cannot be removed from cohort it is not in', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addStudentToCohort('student', '1', 'cohort 1')
    expect(() =>
      cohortManager.removeStudentFromCohort('student', '1', 'cohort 2')
    ).toThrow()
  })

  it('Student cannot be in multiple cohorts at the same time', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addCohort('cohort 2')
    cohortManager.addStudentToCohort('student', '1', 'cohort 1')
    expect(() =>
      cohortManager.addStudentToCohort('student', '1', 'cohort 2')
    ).toThrow()
  })

  it('TestFindStudentByFirstNameAndLastName ', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addStudentToCohort('student', '1', 'cohort 1')
    expect(cohortManager.getStudentByName('student', '1')).toEqual({
      id: 0,
      firstname: 'student',
      lastname: '1'
    })
  })
})
