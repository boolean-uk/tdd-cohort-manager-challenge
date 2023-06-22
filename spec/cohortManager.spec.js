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
  it('delete student from a cohort using github username', () => {
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
    const id1 = app.getStudentId('sarajb')
    const id2 = app.getStudentId('alie1')

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

    const result = app.removeStudent('carolarruda')

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
  it('error message when student github username does not exist', () => {
    app.addCohort('cohort05')
    app.addStudent(
      'cohort05',
      'carolina',
      'arruda',
      'carolarruda',
      'carolinacarruda@sapo.pt'
    )
    const resultTwo = () => app.removeStudent('gity')
    expect(resultTwo).toThrowError('Student was not found')
  })
  it('search for a specific student', () => {
    app.addCohort('cohort10')
    app.addCohort('cohort07')
    app.addStudent('cohort10', 'sara', 'jb', 'sarajb', 'sarajb@sapo.pt')
    app.addStudent('cohort10', 'carol', 'arruda', 'carola', 'carol@sapo.pt')
    const idForTest = app.getStudentId('sarajb')
    const result = app.searchByStudentId(idForTest)
    expect(result).toBeTrue()
  })
  it('error message when student name does not exist', () => {
    app.addCohort('cohort05')
    app.addStudent('cohort05', 'carolina', 'arruda')
    const resultTwo = () => app.searchByStudentId('123')
    expect(resultTwo).toThrowError('Student was not found')
  })
  it('error message when adding more students than cohort capacity', () => {
    app.addCohort('cohort05')

    for (let i = 0; i < 24; i++) {
      app.addStudent(
        'cohort05',
        `firstName${i}`,
        `lastName${i}`,
        `studentUsername${i}`,
        `student${i}@test.com`
      )
    }

    expect(() => {
      app.addStudent(
        'cohort05',
        'extraStudentFirstName',
        'extraStudentLastName',
        'extraStudentUsername',
        'extrastudent@test.com'
      )
    }).toThrowError('Cohort capacity exceeded: cannot add more students')
  })

  it('error message when adding a cohort with existing name', () => {
    app.addCohort('cohort10')
    const result = () => app.addCohort('cohort10')
    expect(result).toThrowError(
      'The cohort name is already in use! Please pick another'
    )
  })
  it('error message when adding a new student that exists in another cohort', () => {
    app.addCohort('cohort10')
    app.addCohort('cohort01')
    app.addStudent('cohort10', 'carol', 'arruda', 'carolarruda')
    const result = () =>
      app.addStudent('cohort01', 'carolina', 'calouro', 'carolarruda')
    expect(result).toThrowError('The student already exists in another cohort')
  })
  it('error message searching students by fullname and no matches are found', () => {
    app.addCohort('cohort10')
    app.addCohort('cohort01')
    app.addStudent('cohort10', 'carol', 'arruda', 'carolarruda')
    const result = () => app.searchByFullname('sara jb')
    expect(result).toThrowError('No students with that name exist')
  })
  it('searching students by fullname and matches are found', () => {
    app.addCohort('cohort10')
    app.addCohort('cohort01')
    app.addStudent('cohort10', 'carol', 'arruda', 'carolarruda')
    app.addStudent('cohort10', 'carol', 'arruda', 'crazyBee')
    const result = app.searchByFullname('carol arruda')
    expect(result).toBeTrue()
  })
  it('sending a text message if a new student is added', () => {
    spyOn(app, 'textAdd')
    app.addCohort('cohort10')
    app.addStudent('cohort10', 'carol', 'arruda', 'carolarruda')
    expect(app.textAdd).toHaveBeenCalled()
  })
  it('sending a text message if a student is deleted', () => {
    spyOn(app, 'textRemove')
    app.addCohort('cohort10')
    app.addStudent('cohort10', 'carol', 'arruda', 'carolarruda')
    app.removeStudent('carolarruda')
    expect(app.textRemove).toHaveBeenCalled()
  })
})
