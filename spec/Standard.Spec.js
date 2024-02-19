describe('Cohort Manager Standard Critera:', () => {
  let cohortManager

  const student = {
    firstName: 'Saul',
    lastName: 'Hudson',
    gitHubUsername: 'SaulGitHudsonHub',
    email: 'saul@hudson.com'
  }

  beforeEach(() => {
    delete require.cache[require.resolve('../src/CohortManager.js')]
    cohortManager = require('../src/CohortManager.js')
  })

  it('Creates a cohort with a cohort name', () => {
    expect(cohortManager.create('Test').name).toEqual('Test')
  })

  it('Finds a specific cohort by name', () => {
    cohortManager.create('Test')
    expect(cohortManager.find('Test')).toEqual({ name: 'Test', students: [] })
  })

  it('Adds a student to a cohort', () => {
    cohortManager.create('CohortWithStudent')
    expect(cohortManager.addStudent(student, 'CohortWithStudent')).toBeTrue()
    expect(cohortManager.find('CohortWithStudent').students[0].email).toBe(
      'saul@hudson.com'
    )
  })

  it('Removes a cohort by cohort name', () => {
    const cohortName = 'DeleteThisCohort'
    cohortManager.create(cohortName)
    expect(cohortManager.remove(cohortName)).toBeTrue()
    expect(() => {
      cohortManager.find(cohortName)
    }).toThrowError()
  })

  it('Removes a student by id', () => {
    const cohortName = 'RemoveStudentCohort'
    cohortManager.create(cohortName)
    expect(cohortManager.addStudent(student, cohortName)).toBeTrue()
    expect(cohortManager.removeStudentById(cohortName, 1)).toBeTrue()
  })
})
