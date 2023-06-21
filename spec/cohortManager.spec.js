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
  it('add a new student to a cohort - testing 2 classes', () => {
    app.addCohort('cohort05')
    const expected = {
      id: 1,
      cohortName: 'cohort05',
      students: [
        {
          firstName: 'carolina',
          lastName: 'arruda',
          githubUsername: 'carolarruda',
          email: 'carolinacarruda@sapo.pt'
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

    expect(result.id).toEqual(expected.id)
    expect(result.cohortName).toEqual(expected.cohortName)
    expect(result.students[0].firstName).toEqual(expected.students[0].firstName)
    expect(result.students[0].lastName).toEqual(expected.students[0].lastName)
    expect(result.students[0].githubUsername).toEqual(
      expected.students[0].githubUsername
    )
    expect(result.students[0].email).toEqual(expected.students[0].email)
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
    app.addCohort('cohort05')
    app.addCohort('cohort06')
    app.addCohort('cohort01')

    const expected = [
      { id: 1, cohortName: 'cohort05', students: [] },
      {
        id: 2,
        cohortName: 'cohort06',
        students: []
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
  it('delete student from a cohort', () => {
    app.addCohort('cohort05')
    app.addCohort('cohort06')
    app.addStudent(
      'cohort06',
      'carolina',
      'arruda',
      'carolarruda',
      'carolinacarruda@sapo.pt'
    )
    app.addStudent('cohort05', 'sara', 'jb', 'sarajb', 'sarajb@sapo.pt')
    app.addStudent('cohort06', 'alan', 'charlie', 'alie1', 'alie1@sapo.pt')
    const id1 = app.getStudentId('cohort05', 'sara', 'jb')
    const id2 = app.getStudentId('cohort06', 'alan', 'charlie')

    const expected = [
      {
        id: 1,
        cohortName: 'cohort05',
        students: [
          {
            firstName: 'sara',
            lastName: 'jb',
            githubUsername: 'sarajb',
            email: 'sarajb@sapo.pt',
            studentID: id1
          }
        ]
      },
      {
        id: 2,
        cohortName: 'cohort06',
        students: [
          {
            firstName: 'alan',
            lastName: 'charlie',
            githubUsername: 'alie1',
            email: 'alie1@sapo.pt',
            studentID: id2
          }
        ]
      }
    ]

    const result = app.removeStudent('carolina arruda')

    for (let i = 0; i < result.length; i++) {
      expect(result[i].id).toEqual(expected[i].id)
      expect(result[i].cohortName).toEqual(expected[i].cohortName)
      expect(result[i].students[0].firstName).toEqual(
        expected[i].students[0].firstName
      )
      expect(result[i].students[0].lastName).toEqual(
        expected[i].students[0].lastName
      )
      expect(result[i].students[0].githubUsername).toEqual(
        expected[i].students[0].githubUsername
      )
      expect(result[i].students[0].email).toEqual(expected[i].students[0].email)
    }
  })
  it('error message when student name does not exist', () => {
    app.addCohort('cohort05')
    app.addStudent(
      'cohort05',
      'carolina',
      'arruda',
      'carolarruda',
      'carolinacarruda@sapo.pt'
    )
    const resultTwo = () => app.removeStudent('carolina')
    expect(resultTwo).toThrowError('Student was not found')
  })
  it('search for a specific student', () => {
    app.addCohort('cohort10')
    app.addCohort('cohort07')
    app.addStudent('cohort10', 'sara', 'jb', 'sarajb', 'sarajb@sapo.pt')
    app.addStudent('cohort10', 'carol', 'arruda', 'carola', 'carol@sapo.pt')
    const idForTest = app.getStudentId('cohort10', 'sara', 'jb')
    const result = app.searchByStudentId(idForTest)
    expect(result).toBeTrue()
  })
  it('error message when student name does not exist', () => {
    app.addCohort('cohort05')
    app.addStudent('cohort05', 'carolina', 'arruda')
    const resultTwo = () => app.searchByStudentId('123')
    expect(resultTwo).toThrowError('Student was not found')
  })
})
