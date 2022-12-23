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

  it('throws error if attempt to add student to multiple cohorts', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.createCohort('cohortTwo')
    cohortManager.addStudent(
      'cohortOne',
      'Tim',
      'Timson',
      'timsgit',
      'tim@son.com'
    )
    expect(() =>
      cohortManager.addStudent(
        'cohortTwo',
        'Tim',
        'Timson',
        'timsgit',
        'tim@son.com'
      )
    ).toThrowError('student cannot exist in multiple cohorts')
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

  it('throws error if cohort name taken', () => {
    cohortManager.createCohort('cohortOne')
    expect(() => cohortManager.createCohort('cohortOne')).toThrowError(
      'cohort name taken'
    )
  })

  it('throws error if cohort not given name', () => {
    expect(() => cohortManager.createCohort()).toThrowError(
      'cohort requires a name'
    )
  })

  it('finds student by id', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.addStudent(
      'cohortOne',
      'Tim',
      'Timson',
      'timsgit',
      'tim@son.com'
    )
    const result = cohortManager.findStudentById(1)
    expect(result).toBeInstanceOf(Student)
    expect(result.id).toBe(1)
  })

  it('finds multiple students with the same name', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.createCohort('cohortTwo')
    cohortManager.addStudent(
      'cohortOne',
      'Tim',
      'Timson',
      'timsgit',
      'tim@son.com'
    )
    cohortManager.addStudent(
      'cohortTwo',
      'Tim',
      'Mitson',
      'timsgit',
      'tsonny@mitson.com'
    )
    const result = cohortManager.findStudentsByName('Tim')
    expect(result[0]).toBeInstanceOf(Student)
    expect(result[0].lastName).toBe('Timson')
    expect(result[1].lastName).toBe('Mitson')
  })

  it('throws error if no name matches found', () => {
    cohortManager.createCohort('cohortOne')
    cohortManager.createCohort('cohortTwo')
    cohortManager.addStudent(
      'cohortOne',
      'Tim',
      'Timson',
      'timsgit',
      'tim@son.com'
    )
    cohortManager.addStudent(
      'cohortTwo',
      'Tim',
      'Mitson',
      'timsgit',
      'tsonny@mitson.com'
    )
    expect(() => cohortManager.findStudentsByName('who?')).toThrowError(
      'no matches found'
    )
  })

  it('throws error if no name input', () => {
    expect(() => cohortManager.findStudentsByName()).toThrowError(
      'please give us something'
    )
  })
})
