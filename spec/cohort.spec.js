const CohortManager = require('../src/CohortList')
const Cohort = require('../src/cohort')
const Student = require('../src/student')

describe('cohort', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })
  it('should add a new student', () => {
    const newStudent = new Student(
      'Joe',
      'Bloggs',
      'JoeBloggs',
      'joeBloggs@test.com',
      1
    )
    const expected = [newStudent]
    const result = cohortManager.addNewStudent(
      'Joe',
      'Bloggs',
      'JoeBloggs',
      'joeBloggs@test.com'
    )
    expect(result).toEqual(expected)
  })
  it('should create a new cohort', () => {
    const newCohort = new Cohort('cohort1')
    const expected = [newCohort]
    const result = cohortManager.createNewCohort('cohort1')
    expect(expected).toEqual(result)
  })
  it('should add student to cohort', () => {
    const testStudent = new Student(
      'Joe',
      'Bloggs',
      'joeBloggs',
      'joeBloggs@test.com',
      1,
      true
    )
    const newCohort = new Cohort('cohort1')
    newCohort.students.push(testStudent)
    const expected = newCohort
    cohortManager.createNewCohort('cohort1')
    cohortManager.addNewStudent(
      'Joe',
      'Bloggs',
      'joeBloggs',
      'joeBloggs@test.com'
    )
    const result = cohortManager.addStudentToCohort('Joe Bloggs', 'cohort1')
    expect(result).toEqual(expected)
  })
  it('find student by name', () => {
    cohortManager.addNewStudent(
      'Joe',
      'Bloggs',
      'joeBloggs',
      'joeBloggs@test.com'
    )
    const testStudent = new Student(
      'Joe',
      'Bloggs',
      'joeBloggs',
      'joeBloggs@test.com',
      1
    )
    const expected = testStudent
    const result = cohortManager.findStudentByName('Joe Bloggs')
    expect(result).toEqual(expected)
  })
  it('find cohort by name', () => {
    const expected = new Cohort('cohort1')
    cohortManager.createNewCohort('cohort1')
    const result = cohortManager.findCohortByName('cohort1')
    expect(result).toEqual(expected)
  })
  it('should remove cohort by name', () => {
    const expected = []
    cohortManager.createNewCohort('cohort1')
    const result = cohortManager.removeCohort('cohort1')
    expect(result).toEqual(expected)
  })
  it('should remove student by name', () => {
    const expected = []
    cohortManager.createNewCohort('cohort1')
    cohortManager.addNewStudent(
      'Joe',
      'Bloggs',
      'joeBloggs',
      'joeBloggs@test.com'
    )
    cohortManager.addStudentToCohort('Joe Bloggs', 'cohort1')
    const result = cohortManager.removeStudentFromCohort(
      'cohort1',
      'Joe Bloggs'
    )
    expect(result).toEqual(expected)
  })
  it('throw error if student isent found', () => {
    const expected = 'Error: no student found'
    const result = cohortManager.findStudentByName('Joe Bloggs')
    expect(result).toEqual(expected)
  })
  it('shouold throw error if cohort not found', () => {
    const expected = 'Error: no cohort found'
    const result = cohortManager.findCohortByName('cohort1')
    expect(result).toEqual(expected)
  })
  it('find student by id', () => {
    const expected = new Student(
      'Joe',
      'Bloggs',
      'joeBloggs',
      'joeBloggs@test.com',
      1
    )
    cohortManager.addNewStudent(
      'Joe',
      'Bloggs',
      'joeBloggs',
      'joeBloggs@test.com'
    )
    const result = cohortManager.findStudentById(1)
    expect(result).toEqual(expected)
  })
  it('cohorts cannot exccede set capacity', () => {
    const expected = 'Cohort full!'
    cohortManager.createNewCohort('cohort1', 1)
    cohortManager.addNewStudent(
      'Joe',
      `Bloggs`,
      'joeBloggs',
      'joeBloggs@test.com'
    )
    cohortManager.addNewStudent(
      'James',
      'Joyce',
      'jamesJoyce',
      'jamesjoyce@gmail.com'
    )

    cohortManager.addStudentToCohort(`Joe Bloggs`, 'cohort1')
    const result = cohortManager.addStudentToCohort('James Joyce', 'cohort1')
    expect(result).toEqual(expected)
  })
  it('cohorts cannot be created with no name', () => {
    const expected = 'cohort name does not meet criteria for a cohort name'
    const result = cohortManager.createNewCohort('')
    expect(result).toEqual(expected)
  })
  it('cohorts cannot be created with the same name', () => {
    const expected = 'cohort name does not meet criteria for a cohort name'
    cohortManager.createNewCohort('cohort1')
    const result = cohortManager.createNewCohort('cohort1')
    expect(result).toEqual(expected)
  })
  it('student cannot be in more than one cohort', () => {
    const expected = 'student is already in a cohort'
    cohortManager.createNewCohort('cohort1')
    cohortManager.createNewCohort('cohort2')
    cohortManager.addNewStudent(
      'Joe',
      'Bloggs',
      'joeBloggs',
      'joeBloggs@test.com'
    )
    cohortManager.addStudentToCohort('Joe Bloggs', 'cohort1')
    const result = cohortManager.addStudentToCohort('Joe Bloggs', 'cohort2')
    expect(result).toEqual(expected)
  })
  it('search for students by name', () => {
    cohortManager.addNewStudent('Joe', 'Bloggs')
    cohortManager.addNewStudent('Joe', 'Hillingham')
    cohortManager.addNewStudent('Jeremy', 'Smith')
    cohortManager.addNewStudent('james', 'Bloggs')
    const expected = [
      new Student('Joe', 'Bloggs', undefined, undefined, 1),
      new Student('Joe', 'Hillingham', undefined, undefined, 2),
      new Student('james', 'Bloggs', undefined, undefined, 4)
    ]
    const result = cohortManager.searchStudents('Joe Bloggs')
    expect(result).toEqual(expected)
  })
})
