import CohortManager from '../src/cohortManager.js'
describe('Test core criteria', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Should be able to add cohort', function () {
    cohortManager.addCohort('cohort 1')
    expect(cohortManager.cohorts).toEqual([{ name: 'cohort 1', students: [] }])
  })

  it('Should be able to get cohort', function () {
    cohortManager.addCohort('cohort 1')
    expect(cohortManager.getCohort('cohort 1')).toEqual({
      name: 'cohort 1',
      students: []
    })
    expect(cohortManager.getCohort('cohort 2')).toBeUndefined()
  })

  it('Should be able to remove cohort', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addCohort('cohort 2')
    cohortManager.removeCohort('cohort 1')
    expect(cohortManager.cohorts).toEqual([{ name: 'cohort 2', students: [] }])
    expect(() => cohortManager.removeCohort('cohort 1')).toThrow()
  })

  it('Should be able to add student to cohort', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addStudentToCohort('student 1', 'cohort 1')
    expect(cohortManager.cohorts).toEqual([
      { name: 'cohort 1', students: [{ id: 0, name: 'student 1' }] }
    ])
    expect(() =>
      cohortManager.addStudentToCohort('student 1', 'cohort 2')
    ).toThrow()
  })

  it('Should be able to remove student from cohort', function () {
    cohortManager.addCohort('cohort 1')
    cohortManager.addStudentToCohort('student 1', 'cohort 1')
    cohortManager.addStudentToCohort('student 2', 'cohort 1')
    cohortManager.removeStudentFromCohort('student 1', 'cohort 1')
    expect(cohortManager.cohorts).toEqual([
      { name: 'cohort 1', students: [{ id: 1, name: 'student 2' }] }
    ])
    expect(() =>
      cohortManager.removeStudentFromCohort('student 1', 'cohort 2')
    ).toThrow()
  })
})
