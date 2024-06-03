import CohortManager, { Cohort, Student } from '../src/index.js'

describe('CohortManager', () => {
  let cohortManager
  let cohort
  let student

  beforeEach(() => {
    cohortManager = new CohortManager()
    cohort = new Cohort()
    student = new Student()
  })
  it('should create a new cohort', () => {
    const expected = cohortManager.create('Cohort 12')
    expect(expected).toBeInstanceOf(Cohort)
    expect(expected.cohortName).toBe('Cohort 12')
  })
  it('should search cohort by name', () => {
    cohortManager.create('Cohort 10')
    cohortManager.create('Cohort 11')
    cohortManager.create('Cohort 12')

    expect(cohortManager.search('Cohort 12').cohortName).toBe('Cohort 12')
  })
  it('should throw an error if the cohort does not exist', () => {
    expect(() => cohortManager.search('Cohort 13')).toThrow('Cohort not found')
  })
  it('should create a new student and add it to the cohort', () => {
    const expected = cohort.add(
      'Troy',
      'McClure',
      'tmcclure',
      'tmcclure@hollywood.org'
    )
    const result = new Student(
      1,
      'Troy',
      'McClure',
      'tmcclure',
      'tmcclure@hollywood.org'
    )
    expect(expected).toBeInstanceOf(Student)
    expect(expected).toEqual(result)
  })
  it('should get all cohorts', () => {
    cohortManager.create('Cohort 11')
    cohortManager.create('Cohort 12')
    cohortManager.create('Cohort 13')

    const expected = cohortManager.getAll()
    expect(expected.length).toBe(3)
  })
})
