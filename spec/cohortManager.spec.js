const { CohortManager, Cohort } = require('../src/cohortManager.js')

describe('Cohort manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('(1) should create a new cohort', () => {
    // setup
    const cohortsArray = [
      {
        IDCohort: 1,
        nameCohort: 'Frontend Cohort',
        maxStudents: 24,
        students: []
      },
      {
        IDCohort: 2,
        nameCohort: 'Backend Cohort',
        maxStudents: 24,
        students: []
      }
    ]
    // execute
    const expected = cohortManager.cohorts.cohortsArray

    // verify
    expect(
      cohortManager.createCohort('Frontend Cohort'),
      cohortManager.createCohort('Backend Cohort')
    ).toEqual(expected)
  })

  it('(2) should return a cohort searched for by name', () => {
    // setup
    cohortManager.createCohort('Frontend Cohort')
    cohortManager.createCohort('Backend Cohort')

    // execute
    const expected = (cohortManager.cohorts = [
      {
        IDCohort: 1,
        nameCohort: 'Frontend Cohort',
        maxStudents: 24,
        students: []
      }
    ])
    const result = cohortManager.searchCohort('Frontend Cohort')

    // verify
    expect(result).toEqual(expected)
  })

  it('(3) should return an error if searched cohort does not exist', () => {
    // setup
    const result = () => cohortManager.searchCohort('French Cohort')

    // verify
    expect(result).toThrowError('Cohort not found')
  })

  it('(4) should delete a cohort from cohorts array', () => {
    // setup
    cohortManager.createCohort('Backend Cohort')

    const expected = []
    const result = cohortManager.deleteCohort('Backend Cohort')

    // verify
    expect(result).toEqual(expected)
  })

  it('(5) should return an error if deleteing non-existent cohort', () => {
    // setup

    const result = () => cohortManager.deleteCohort('Backend Cohort')

    // verify
    expect(result).toThrowError('Cohort not found')
  })

  it('(6) should create a new student and add to specific cohort', () => {
    // setup
    cohortManager.createCohort('Frontend')

    const expected = {
      studentID: 1,
      cohortID: 'Frontend',
      firstName: 'Bob',
      lastName: 'Builder',
      githubUser: 'builderB',
      email: 'bob@bob.com'
    }

    // execute
    const result = cohortManager.addNewStudent(
      'Bob',
      'Builder',
      'builderB',
      'bob@bob.com',
      'Frontend'
    )
    // verify
    expect(result).toEqual(expected)
  })

  it('(7) should delete a student from a specific cohort', () => {
    // setup

    cohortManager.createCohort('cohort1')

    cohortManager.addNewStudent(
      'Bob',
      'Builder',
      'builderB',
      'bob@bob.com',
      'cohort1'
    )

    cohortManager.addNewStudent(
      'Bob',
      'student2 LN',
      '2nd',
      '2@student.com',
      'cohort1'
    )

    const expected = [
      {
        studentID: 2,
        cohortID: 'cohort1',
        firstName: 'Bob',
        lastName: 'student2 LN',
        githubUser: '2nd',
        email: '2@student.com'
      }
    ]

    const result = cohortManager.removeFromCohort('Bob', 'Builder', 'cohort1')

    // verify
    expect(result).toEqual(expected)
  })

  it('(8) should return an error if attempting to remove a student not found', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () =>
      cohortManager.removeFromCohort('Captain', 'America', 'cohort1')

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(9) should find a student by their studentID', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    const student1 = cohortManager.addNewStudent(
      'Captain',
      'America',
      'CapUSA',
      'captaing@avengers.com',
      'cohort1'
    )

    const student2 = cohortManager.addNewStudent(
      'Bob',
      'Builder',
      'builderB',
      'bob@bob.com',
      'cohort1'
    )

    const student3 = cohortManager.addNewStudent(
      'Bob',
      'student2 LN',
      '2nd',
      '2@student.com',
      'cohort2'
    )

    const expected = student3

    const result = cohortManager.findStudentbyID(student3.studentID)

    // verify
    expect(result).toEqual(expected)
  })

  it('(10) should return an error if student is not found in ID search', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () => cohortManager.findStudentbyID(12)

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(11) should find a student by their studentID', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    const student1 = cohortManager.addNewStudent(
      'Captain',
      'America',
      'CapUSA',
      'captaing@avengers.com',
      'cohort1'
    )

    const student2 = cohortManager.addNewStudent(
      'Bob',
      'Builder',
      'builderB',
      'bob@bob.com',
      'cohort1'
    )

    const student3 = cohortManager.addNewStudent(
      'Bob',
      'student2 LN',
      '2nd',
      '2@student.com',
      'cohort2'
    )

    const expected = student3

    const result = cohortManager.findStudentbyID(student3.studentID)

    // verify
    expect(result).toEqual(expected)
  })

  it('(12) should return an error if trying to add a student to a full cohort', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.cohorts[0].cohortStudentCount = 24

    const result = () =>
      cohortManager.addNewStudent(
        'Bob',
        'Builder',
        'builderB',
        'bob@bob.com',
        'cohort1'
      )

    // verify
    expect(result).toThrowError(
      'Cohort is full. Please assign student to another cohort'
    )
  })

  it('(13) should find a student by their surname and return all that match', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    const student1 = cohortManager.addNewStudent(
      'Captain',
      'America',
      'CapUSA',
      'captaing@avengers.com',
      'cohort1'
    )

    const student2 = cohortManager.addNewStudent(
      'Bob',
      'Builder',
      'builderB',
      'bob@bob.com',
      'cohort1'
    )

    const expected = [student1]

    const result = cohortManager.findStudentbytName(student1.lastName)

    // verify
    expect(result).toEqual(expected)
  })

  it('(14) should find a student by their first name and return all that match', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    const student1 = cohortManager.addNewStudent(
      'Captain',
      'America',
      'CapUSA',
      'captaing@avengers.com',
      'cohort1'
    )

    const student2 = cohortManager.addNewStudent(
      'Bob',
      'Builder',
      'builderB',
      'bob@bob.com',
      'cohort1'
    )

    const student3 = cohortManager.addNewStudent(
      'Bob',
      'student2 LN',
      '2nd',
      '2@student.com',
      'cohort2'
    )

    const expected = [student2, student3]

    const result = cohortManager.findStudentbytName('Bob')

    // verify
    expect(result).toEqual(expected)
  })

  it('(15) should return an error student is not found', () => {
    // setup
    cohortManager.createCohort('cohort1')

    const result = () => cohortManager.findStudentbytName('Alice')

    // verify
    expect(result).toThrowError('Student not found')
  })

  it('(16) should check if a cohort name exists already', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    // execute
    const result = () => cohortManager.createCohort('cohort1')
    // verify
    expect(result).toThrowError('This cohort already exists')
  })

  it('(17) should check if a cohort name exists already', () => {
    // setup

    // execute
    const result = () => cohortManager.createCohort()
    // verify
    expect(result).toThrowError('Cohort must be given a name')
  })

  //   it('(18.1) should remove student from original cohort when moved', () => {
  //     // setup
  //     cohortManager.createCohort('cohort1')
  //     cohortManager.createCohort('cohort2')

  //     const student = cohortManager.addNewStudent(
  //       'Fiona',
  //       'Princess',
  //       'PrincessFiona',
  //       'fiona@faraway.com',
  //       'cohort1'
  //     )
  //     // execute
  //     cohortManager.reassignStudentCohort(student.studentID, 'cohort2')

  //     const expected1 = []
  //     // const expected2 = 0

  //     const result1 = cohortManager.cohorts[0].studentsInCohort
  //     // const result2 = cohortManager.cohort[0].cohortStudentCount
  //     // verify
  //     expect(result1).toEqual(expected1)
  //     // expect(result2).toEqual(expected2)
  //   })

  it('(18.2) should move student to different cohort', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    const student = cohortManager.addNewStudent(
      'Fiona',
      'Princess',
      'PrincessFiona',
      'fiona@faraway.com',
      'cohort1'
    )
    const cohort2 = cohortManager.cohorts[1]

    cohortManager.reassignStudentCohort(student.studentID, 'cohort2')
    // execute
    const expected = [student]
    const result = cohortManager.cohorts[1].studentsInCohort

    // verify
    expect(result).toEqual(expected)
    expect(student.cohortID).toEqual('cohort2')
    expect(cohort2.cohortStudentCount).toEqual(1)
  })
})
