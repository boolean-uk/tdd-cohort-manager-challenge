const CohortManager = require('../src/CohortManager')
const Cohort = require('../src/Cohort')
const Student = require('../src/Student')

describe('cohort manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('create cohorts', () => {
    cohortManager.createCohort('cohortOne')
    const result = cohortManager.createCohort('cohortTwo')
    expect(result[0]).toBeInstanceOf(Cohort)
    expect(result[0].name).toBe('cohortOne')
    expect(result[1].name).toBe('cohortTwo')
    expect(result[0].students.length).toBe(0)
  })

  it('searches for existing cohort', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.createCohort('cohortTwo')
    const result = cohortManager.searchCohorts('cohortOne')
    expect(result.name).toBe('cohortOne')
  })

  it('throws error if cohort not found', () => {
    expect(() => cohortManager.searchCohorts('cohort missing')).toThrowError(
      'cohort not found'
    )
  })

  it('adds student to cohort', () => {
    cohortManager.createCohort('cohortOne')
    const result = cohortManager.addStudent(
      'cohortOne',
      'Tim',
      'Timson',
      'timsgit',
      'tim@son.com'
    )
    expect(result[0]).toBeInstanceOf(Student)
    expect(result[0].id).toBe(1)
    expect(result[0].firstName).toBe('Tim')
    expect(result[0].email).toBe('tim@son.com')
  })

  it('removes cohort', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.createCohort('cohortTwo')
    const result = cohortManager.removeCohort('cohortOne')
    expect(result[0]).toBeInstanceOf(Cohort)
    expect(result[0].name).toBe('cohortTwo')
  })

  it('removes student from cohort', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.addStudent(
      'cohortOne',
      'Tim',
      'Timson',
      'timsgit',
      'tim@son.com'
    )
    cohortManager.addStudent(
      'cohortOne',
      'Sonny',
      'Mitson',
      'gitmitdiesonne',
      'niceweather@mitdiesonne.de'
    )
    const result = cohortManager.removeStudent('cohortOne', 1)
    expect(result[0]).toBeInstanceOf(Student)
    expect(result[0].id).toBe(2)
  })

  it('throws error if student not found', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.addStudent(
      'cohortOne',
      'Tim',
      'Timson',
      'timsgit',
      'tim@son.com'
    )
    expect(() => cohortManager.removeStudent('cohortOne', 2)).toThrowError(
      'student not found'
    )
  })

  it('throws error if cohort not found', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.addStudent(
      'cohortOne',
      'Tim',
      'Timson',
      'timsgit',
      'tim@son.com'
    )
    expect(() => cohortManager.removeStudent('cohortTwo', 1)).toThrowError(
      'cohort not found'
    )
  })
})
