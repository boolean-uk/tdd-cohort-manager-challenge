const CohortManager = require('../src/CohortManager.js')
const Student = require('../src/Student.js')
const Cohort = require('../src/Cohort.js')

describe('Testing CohortManager', () => {
  let cohortManager
  let cohort
  beforeEach(() => {
    cohortManager = new CohortManager()
    cohort = new Cohort()
  })

  it('createCohort creates a new cohort', () => {
    // Setup
    const expectedResult = new Cohort('Cohort 1', 1)
    // Execution
    cohortManager.createCohort('Cohort 1')
    const result = cohortManager.cohortList
    // Check
    expect(result).toEqual([expectedResult])
  })

  it('createCohort can add multiple cohorts', () => {
    // Setup
    // Execution
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 1')
    const result = cohortManager.cohortList.length
    // Check
    expect(result).toBe(2)
  })

  it('createCohort returns error if cohort name already exists', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    // Execution
    // Check
    expect(() =>
      cohortManager
        .createCohort('Cohort 1')
        .toThrowError('Cohort name is already in use')
    )
  })

  it('createCohort returns error if no cohort name given', () => {
    // Setup
    // Execution
    // Check
    expect(() =>
      cohortManager
        .createCohort('')
        .toThrowError('Please provide a cohort name')
    )
    expect(() =>
      cohortManager.createCohort().toThrowError('Please provide a cohort name')
    )
  })

  it('findCohort returns cohort if it exists', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    cohortManager.createCohort('Cohort 3')
    // Execution
    const result = cohortManager.findCohort('Cohort 2')
    // Check
    expect(result.cohortName).toBe('Cohort 2')
    expect(result.cohortID).toBe(2)
  })

  it('findCohort returns error if not found', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    // Execution
    // Check
    expect(() =>
      cohortManager.findCohort('Cohort 2').toThrowError('Cohort not found')
    )
  })

  it('addStudent successfully adds student to cohort', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    // Execution
    cohortManager.addStudent('first', 'last', 'git', 'email', 'Cohort 1')
    const result = cohortManager.findCohort('Cohort 1').cohortStudents.length
    // Check
    expect(result).toBe(1)
  })

  it('addStudent successfully adds multiple students to cohort', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    // Execution
    cohortManager.addStudent('first', 'last', 'git', 'email', 'Cohort 1')
    cohortManager.addStudent('first2', 'last2', 'git2', 'email2', 'Cohort 1')
    const result = cohortManager.findCohort('Cohort 1').cohortStudents.length
    // Check
    expect(result).toBe(2)
  })

  it('addStudent cannot find given cohort', () => {
    // Setup
    // Execution
    // Check
    expect(() =>
      cohortManager
        .addStudent('first', 'last', 'git', 'email', 'Cohort 1')
        .toThrowError('Cohort not found')
    )
  })

  it('addStudent given an invalid name or no name', () => {
    // Setup
    // Execution
    // Check
    expect(() =>
      cohortManager
        .addStudent('last', 'git', 'email', 'Cohort 1')
        .toThrowError('Please make sure to provide all student details')
    )
  })

  it('addStudent returns error if cohort already contains 24 students', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    for (let i = 0; i < 24; i++) {
      cohortManager.addStudent(`first${i}`, 'last', 'git', 'email', 'Cohort 1')
    }
    // Execution
    // Check
    expect(() =>
      cohortManager
        .addStudent('first', 'last', 'git', 'email', 'Cohort 1')
        .toThrowError('Cohort is full')
    )
  })

  it('addStudent returns error if student already exists', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    cohortManager.addStudent('first', 'last', 'git', 'email', 'Cohort 1')
    cohortManager.addStudent('first2', 'last2', 'git2', 'email2', 'Cohort 2')
    // Execution
    // Check
    expect(() =>
      cohortManager
        .addStudent('first', 'last', 'git', 'email', 'Cohort 1')
        .toThrowError('Student already exists in this cohort')
    )
    expect(() =>
      cohortManager
        .addStudent('first2', 'last2', 'git2', 'email2', 'Cohort 1')
        .toThrowError('Student already exists in another cohort')
    )
  })

  it('removeCohort successfully removes cohort', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    // Execution
    cohortManager.removeCohort('Cohort 1')
    const result = cohortManager.cohortList.length
    // Check
    expect(result).toBe(1)
  })

  it('removeCohort cannot find cohort', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    // Execution
    // Check
    expect(() =>
      cohortManager.removeCohort('Cohort 3').toThrowError('Cohort not found')
    )
  })

  it('removeStudent was successful', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.addStudent('first', 'last', 'git', 'email', 'Cohort 1')
    cohortManager.addStudent('first2', 'last2', 'git2', 'email2', 'Cohort 1')
    const expectedResult = new CohortManager()
    expectedResult.createCohort('Cohort 1')
    const testStudent = new Student(2, 'first2', 'last2', 'git2', 'email2')
    expectedResult.cohortList[0].cohortStudents.push(testStudent)
    // Execution
    cohortManager.removeStudent('Cohort 1', 'first', 'last')
    const result = cohortManager.cohortList
    // Check
    expect(result).toEqual(expectedResult.cohortList)
  })

  it('removeStudent cannot find cohort', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.addStudent('first', 'last', 'git', 'email', 'Cohort 1')
    // Execution
    // Check
    expect(() =>
      cohortManager
        .removeStudent('Cohort 2', 'first', 'last')
        .toThrowError('Cohort not found')
    )
  })

  it('removeStudent cannot find student', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.addStudent('first', 'last', 'git', 'email', 'Cohort 1')
    // Execution
    // Check
    expect(() =>
      cohortManager
        .removeStudent('Cohort 1', 'first2', 'last2')
        .toThrowError('Student not found')
    )
  })

  it('findStudentByID returns student if found', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    cohortManager.addStudent('first', 'last', 'git', 'email', 'Cohort 1')
    cohortManager.addStudent('first2', 'last2', 'git2', 'email2', 'Cohort 1')
    cohortManager.addStudent('first3', 'last3', 'git3', 'email3', 'Cohort 2')
    // Execution
    const expectedResult = {
      studentID: 3,
      firstName: 'first3',
      lastName: 'last3',
      gitName: 'git3',
      email: 'email3',
      cohort: 'Cohort 2'
    }
    const result = cohortManager.findStudentByID(3)
    // Check
    expect(result).toEqual(expectedResult)
  })

  it('findStudentByID returns error if student not found', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    // Execution
    // Check
    expect(() =>
      cohortManager
        .findStudentByID(1)
        .toThrowError('No student matching that ID was found')
    )
  })

  it('findStudentByID returns error if ID not provided or NaA', () => {
    // Setup
    cohortManager.createCohort('Cohort 1')
    // Execution
    // Check
    expect(() =>
      cohortManager
        .findStudentByID()
        .toThrowError('Invalid or missing student ID')
    )
    expect(() =>
      cohortManager
        .findStudentByID('string')
        .toThrowError('Invalid or missing student ID')
    )
  })
})

describe('Testing Student Constructor', () => {
  it('Successfully creates a new student', () => {
    // Setup
    // Execution
    const result = new Student(1, 'first', 'last', 'git', 'email')
    // Check
    expect(result.studentID).toEqual(1)
    expect(result.firstName).toEqual('first')
    expect(result.lastName).toEqual('last')
    expect(result.gitName).toEqual('git')
    expect(result.email).toEqual('email')
  })
})

// eslint-disable-next-line prettier/prettier
/*
describe('', () => {
  it('', () => {
    // Setup
    // Execution
    // Check
  })
})
*/
