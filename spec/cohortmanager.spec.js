import CohortManager from '../src/CohortManager.js'

describe('Cohort Manager', () => {
  it('should create an instance of cohort manager', () => {
    const cohortManager = new CohortManager()
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })

  it('should add new cohorts to the cohort list', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(cohortManager.cohorts.length).toEqual(1)
  })

  it('should throw an error if a cohort already exists with that name', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(() => cohortManager.addCohort('testCohort')).toThrowError(
      'A cohort already exists with that name'
    )
  })

  it('should find a cohort from its name', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(cohortManager.findCohort('testCohort').name).toEqual('testCohort')
  })

  it('should throw an error if no cohort can be found with that name', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(() => cohortManager.findCohort('otherCohort').name).toThrowError(
      'No cohort found with that name'
    )
  })

  it('find a cohort and add student', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    cohortManager.addStudent('testCohort', 'test', 'student')
    expect(cohortManager.cohorts[0].students[0].firstName).toEqual('test')
  })

  it('should find a cohort and add student', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    cohortManager.addStudent('testCohort', 'test', 'student')
    expect(cohortManager.cohorts[0].students[0].firstName).toEqual('test')
  })

  it('should throw an error if adding student to non-existant cohort', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    cohortManager.addStudent('otherCohort', 'test', 'student')
    expect(() => {cohortManager.addStudent('otherCohort', 'test', 'student')}).toThrowError('No cohort found with that name')
  })
})
