const CohortManager = require('../src/cohortManager.js')

describe('Cohort Manager', () => {
  let app

  beforeEach(() => {
    app = new CohortManager()
  })

  it('creates a new cohort', () => {
    const expected = {
      id: 1,
      cohortName: 'cohort10',
      students: []
    }
    const result = app.addCohort('cohort10')
    expect(result).toEqual(expected)
  })
  it('cohort manager has no cohorts', () => {
    const expected = []
    const result = app.cohorts
    expect(result).toEqual(expected)
  })

  it('search for a specific cohort', () => {
    app.addCohort('cohort10')
    app.addCohort('cohort06')
    app.addCohort('cohort07')
    const result = app.searchByCohortName('cohort10')
    const expected = {
      id: 1,
      cohortName: 'cohort10',
      students: []
    }
    expect(result).toEqual(expected)
  })
  it('error message when cohort name does not exist', () => {
    app.addCohort('cohort05')
    app.addCohort('cohort06')
    app.addCohort('cohort07')
    const result = () => app.searchByCohortName('cohort10')
    expect(result).toThrowError('Cohort was not found')
  })
  it('add a new student to a cohort', () => {
    app.addCohort('cohort05')
    const expectedId = 'WDB5E7X'
    spyOn(app, 'generateStudentId').and.returnValue(expectedId)
    const expected = {
      id: 1,
      cohortName: 'cohort05',
      students: [
        {
          firstName: 'carolina',
          lastName: 'arruda',
          githubUsername: 'carolarruda',
          email: 'carolinacarruda@sapo.pt',
          studentID: expectedId
        }
      ]
    }
    const result = app.addStudent(
      'cohort05',
      'carolina',
      'arruda',
      'carolarruda',
      'carolinacarruda@sapo.pt'
    )
    expect(result).toEqual(expected)
  })
  it('error message when cohort name does not exist, when adding a student', () => {
    app.addCohort('cohort05')
    const result = () =>
      app.addStudent(
        'cohort06',
        'carolina',
        'arruda',
        'carolarruda',
        'carolinacarruda@sapo.pt'
      )
    expect(result).toThrowError('Cohort was not found')
  })
  it('delete a cohort', () => {
    const expectedIdTwo = '9HW7B1Y'
    spyOn(app, 'generateStudentId').and.returnValue(expectedIdTwo)
    app.addCohort('cohort05')
    app.addCohort('cohort06')
    app.addCohort('cohort01')
    app.addStudent(
      'cohort06',
      'carolina',
      'arruda',
      'carolarruda',
      'carolinacarruda@sapo.pt'
    )

    const expected = [
      { id: 1, cohortName: 'cohort05', students: [] },
      {
        id: 2,
        cohortName: 'cohort06',
        students: [
          {
            firstName: 'carolina',
            lastName: 'arruda',
            githubUsername: 'carolarruda',
            email: 'carolinacarruda@sapo.pt',
            studentID: expectedIdTwo
          }
        ]
      }
    ]
    const result = app.removeCohort('cohort01')
    expect(result).toEqual(expected)
  })
  it('error message when cohort name does not exist, when deleting a cohort', () => {
    app.addCohort('cohort05')
    const result = () => app.removeCohort('cohort06')
    expect(result).toThrowError('Cohort was not found')
  })
})
