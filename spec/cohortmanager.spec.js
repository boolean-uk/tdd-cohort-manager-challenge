import CohortManager from '../src/CohortManager.js'

describe('Cohort Manager', () => {
  it('should create an instance of cohort manager', () => {
    const cohortManager = new CohortManager()
    expect(cohortManager).toBeInstanceOf(CohortManager)
  })

  it('should add new cohorts to the cohort list', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(cohortManager.cohorts.length).toEqual(1)
  })

  it('should throw an error if a cohort already exists with that name', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(() => cohortManager.addCohort('testCohort')).toThrowError(
      'A cohort already exists with that name'
    )
  })

  it('should find a cohort from its name', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(cohortManager.findCohort('testCohort').name).toEqual('testCohort')
  })

  it('should throw an error if no cohort can be found with that name', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(() => cohortManager.findCohort('otherCohort').name).toThrowError(
      'No cohort found with that name'
    )
  })

  it('find a cohort and add student', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    cohortManager.addStudent('testCohort', 'test', 'student')
    expect(cohortManager.cohorts[0].students[0].firstName).toEqual('test')
  })

  it('should find a cohort and add student', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    cohortManager.addStudent('testCohort', 'test', 'student')
    expect(cohortManager.cohorts[0].students[0].firstName).toEqual('test')
  })

  it('should throw an error if adding student to non-existant cohort', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    expect(() => {
      cohortManager.addStudent('otherCohort', 'test', 'student')
    }).toThrowError('No cohort found with that name')
  })

  it('should throw an error if adding student to cohort with >= 24 students', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    for (let i = 0; i < 24; i++) {
      cohortManager.addStudent('testCohort', `test${i}`, 'student')
    }
    expect(() => {
      cohortManager.addStudent('testCohort', 'test', 'student')
    }).toThrowError('No more than 24 students per cohort')
  })

  it('should throw an error if student aleady exists', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    cohortManager.addStudent(
      'testCohort',
      'test',
      'student',
      'testGit',
      'test@email.com'
    )

    expect(() => {
      cohortManager.addStudent(
        'testCohort',
        'test',
        'student',
        'testGit',
        'test@email.com'
      )
    }).toThrowError('This student already exists')
  })

  it('should remove cohorts by name', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    cohortManager.removeCohort('testCohort')

    expect(cohortManager.cohorts.length).toEqual(0)
  })

  it('should throw an error when attempting to remove a non-existant cohort', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')

    expect(() => cohortManager.removeCohort('otherCohort')).toThrowError(
      'No cohort found with that name'
    )
  })

  it('should find and remove a student from a specific cohort', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('testCohort')
    cohortManager.addCohort('testCohort2')
    cohortManager.addStudent(
      'testCohort',
      'test',
      'student',
      'testGit',
      'test@email.com'
    )
    cohortManager.addStudent(
      'testCohort2',
      'test2',
      'student2',
      'testGit2',
      'test@email.com2'
    )

    cohortManager.removeStudent('testCohort', 'test', 'student')
    const targetCohort = cohortManager.findCohort('testCohort')

    expect(targetCohort.students.length).toEqual(0)
  })

  it('should find student by their student ID', () => {
    const cohortManager = new CohortManager()
    cohortManager.addCohort('findStudentTestCohort')
    const student1 = cohortManager.addStudent(
      'findStudentTestCohort',
      'test',
      'student',
      'testGit',
      'test@email.com'
    )
  
    const studentToFind = cohortManager.findStudent(student1.studentId)
    expect(studentToFind.studentId).toEqual(student1.studentId)
  })
})
