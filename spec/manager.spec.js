import { CohortManager, Cohort, Student } from '../src/manager.js'

describe('Student', () => {
  it('should set a students details and return fullname', () => {
    const student = new Student()
    student.studentDetails(
      '1234',
      'John',
      'Doe',
      'codeDoe',
      'john_doe@boolean.com'
    )
    expect(student.studentID).toBe('1234')
    expect(student.firstName).toBe('John')
    expect(student.lastName).toBe('Doe')
    expect(student.githubUsername).toBe('codeDoe')
    expect(student.email).toBe('john_doe@boolean.com')
    expect(student.getName()).toBe('John Doe')
  })
})

describe('Cohort', () => {
  let cohort
  let student

  beforeEach(() => {
    cohort = new Cohort('Cohort 1')
    student = new Student()
    student.studentDetails(
      '1234',
      'John',
      'Doe',
      'codeDoe',
      'john_doe@boolean.com'
    )
  })

  it('should add a student to the cohort', () => {
    cohort.addStudent(student)
    expect(cohort.students.length).toBe(1)
    expect(cohort.students[0].studentID).toBe('1234')
  })

  it('should throw an error if the cohort has reached the max capacity of 24 student', () => {
    for (let i = 1; 1 <= 24; i++) {
      const newStudent = new Student()
      newStudent.studentDetails(
        `${i}`,
        `First${i}`,
        `Last${i}`,
        `github${i}`,
        `email${i}@Boolean.com`
      )
      cohort.addStudent(newStudent)
    }
    expect(() => {
      const newStudent = new Student()
      newStudent.studentDetails(
        '25',
        'First25',
        'Last25',
        'github25',
        'email25@boolean.com'
      )
      cohort.addStudent(newStudent)
    }).toThrowError('Cohort is at full capacity')
  })

  it('should remove a student from a cohort', () => {
    cohort.addStudent(student)
    cohort.removeStudent('1234')
    expect(cohort.students.length).toBe(0)
  })

  it('should find a student in the cohort', () => {
    cohort.addStudent(student)
    const foundStudent = cohort.findStudent('1234')
    expect(foundStudent.studentID).toBe('1234')
  })

  it('should throw an error if studnet already in the cohort', () => {
    cohort.addStudent(student)
    expect(() => cohort.addStudent(student)).toThrowError(
      'Student already in cohort'
    )
  })

  it('should throw an error if student not found in cohort', () => {
    expect(() => cohort.removeStudent('nonexistent')).toThrowError(
      'Student not found'
    )
  })

  it('should throw an error if student not found in cohort when searching', () => {
    expect(() => cohort.findStudent('nonexistent')).toThrowError(
      'Student not found'
    )
  })
})

describe('CohortManager', () => {
  let cohortManager
  let student

  beforeEach(() => {
    cohortManager = new CohortManager()
    student = new Student()
    student.studentDetails(
      '1234',
      'John',
      'Doe',
      'codeDoe',
      'john_doe@boolean.com'
    )
  })

  it('should create a new cohort', () => {
    cohortManager.createCohort('Cohort 1')
    const cohort = cohortManager.cohorts.get('Cohort 1')
    expect(cohort.name).toBe('Cohort 1')
  })

  it('should throw an error if the cohort already exists', () => {
    cohortManager.createCohort('Cohort 1')
    expect(() => cohortManager.createCohort('Cohort 1')).toThrowError(
      'Cohort already exists'
    )
  })

  it('should find an existing cohort', () => {
    cohortManager.createCohort('Cohort 1')
    const foundCohort = cohortManager.searchCohort('Cohort 1')
    expect(foundCohort.name).toBe('Cohort 1')
  })

  it('should throw an error if the cohort does not exist', () => {
    expect(() => cohortManager.searchCohort('nonexistent')).toThrowError(
      'Cohort not found'
    )
  })

  it('should add a student to a cohort', () => {
    cohortManager.createCohort('Cohort 1')
    cohortManager.addStudentToCohort('Cohort 1', student)
    const cohort = cohortManager.searchCohort('Cohort 1')
    expect(cohort.students.length).toBe(1)
    expect(cohort.students[0].studentID).toBe('1234')
  })

  it('should throw an error if student not found in cohort', () => {
    cohortManager.createCohort('Cohort 1')
    cohortManager.addStudentToCohort('Cohort 1', student)
    expect(() =>
      cohortManager.addStudentToCohort('Cohort 1', student)
    ).toThrowError('Student already in cohort')
  })

  it('should remove a cohort', () => {
    cohortManager.createCohort('Cohort 1')
    cohortManager.removeCohort('Cohort 1')
    expect(() => cohortManager.searchCohort('Cohort 1')).toThrowError(
      'Cohort not found'
    )
  })

  it('throw an error if cohort not found', () => {
    expect(() => cohortManager.searchCohort('Nonexistent')).toThrowError(
      'Cohort not found'
    )
  })

  it('should remove a student form a cohort', () => {
    cohortManager.createCohort('Cohort 1')
    cohortManager.addStudentToCohort('Cohort 1', student)
    cohortManager.removeStudentFromCohort('Cohort 1', '1234')
    const cohort = cohortManager.searchCohort('Cohort 1')
    expect(cohort.students.length).toBe(0)
  })

  it('should throw an error if student not found in cohort', () => {
    cohortManager.createCohort('Cohort 1')
    expect(() =>
      cohortManager.removeStudentFromCohort('Cohort 1', 'nonexistent')
    ).toThrowError('Student not found')
  })
})
