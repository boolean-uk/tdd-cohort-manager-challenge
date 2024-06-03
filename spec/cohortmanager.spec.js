import CohortManager from '../src/CohortManager.js'

describe('Cohort Manager', () => {
  it('should create an instance of cohort manager', () => {
    const cohort = new CohortManager()
    expect(cohort).toBeInstanceOf(CohortManager)
  })

  it('should add new cohorts to the cohort list', () => {
    const cohort = new CohortManager()
    cohort.addCohort('testCohort')
    expect(cohort.cohorts.length).toEqual(1)
  })

  it('should throw an error if a cohort already exists with that name', () => {
    const cohort = new CohortManager()
    cohort.addCohort('testCohort')
    expect(() => cohort.addCohort('testCohort')).toThrowError(
      'A cohort already exists with that name'
    )
  })

  it('should find a cohort from its name', () => {
    const cohort = new CohortManager()
    cohort.addCohort('testCohort')
    expect(cohort.findCohort('testCohort').name).toEqual('testCohort')
  })

  it('should throw an error if no cohort can be found with that name', () => {
    const cohort = new CohortManager()
    cohort.addCohort('testCohort')
    expect(() => cohort.findCohort('otherCohort').name).toThrowError(
      'No cohort found with that name'
    )
  })

  it('find a cohort and add student', () => {
    const cohort = new CohortManager()
    cohort.addCohort('testCohort')
    cohort.addStudent('testCohort', 'test', 'student')
    expect(cohort.students.length).toEqual(1)
  })
})
