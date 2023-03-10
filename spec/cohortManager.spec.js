const { CohortManager } = require('../src/cohortManager.js')

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

    const cohort1 = cohortManager.cohorts[0]

    // execute
    const expected = cohort1
    const result = cohortManager.searchCohort('Frontend Cohort')

    // verify
    expect(result).toEqual(expected)
  })

  it('(4) should delete a cohort from cohorts array', () => {
    // setup
    cohortManager.createCohort('Backend Cohort')

    const expected = []
    const result = cohortManager.deleteCohort('Backend Cohort')

    // verify
    expect(result).toEqual(expected)
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

  it('(17) should check if a cohort name exists already', () => {
    // setup

    // execute
    const result = () => cohortManager.createCohort()
    // verify
    expect(result).toThrowError('Cohort must be given a name')
  })

  it('(18) should remove student from original cohort when moved', () => {
    // setup
    cohortManager.createCohort('cohort1')
    cohortManager.createCohort('cohort2')

    const cohort1 = cohortManager.cohorts[0]
    const cohort2 = cohortManager.cohorts[1]

    const student = cohortManager.addNewStudent(
      'Fiona',
      'Princess',
      'PrincessFiona',
      'fiona@faraway.com',
      'cohort1'
    )
    // execute
    cohortManager.reassignStudentCohort(student.studentID, 'cohort2')

    // verify
    // changes to student:
    expect(student.cohortID).toEqual('cohort2')

    // changes to cohort1:
    expect(cohort1.cohortStudentCount).toEqual(0)
    expect(cohort1.studentsInCohort.length).toEqual(0)

    // changes to cohort2:
    expect(cohort2.studentsInCohort).toEqual([student])
    expect(cohort2.cohortStudentCount).toEqual(1)
  })
})
