const CohortManager = require('../../src/cohortManager')

describe('Test cohort manager', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('should create a cohort name', () => {
    // set up
    const namesCohort = 'Cohort 10'
    // execute
    const cohort = cohortManager.createCohort(namesCohort)

    // verify
    expect(cohortManager.cohorts.length).toBe(1)
    expect(cohort.name).toBe(namesCohort)
    expect(cohort.students).toEqual([])
  })

  fit('adds a student to an existing cohort', () => {
    // set up
    const namesCohort = 'Cohort 10'
    const cohort = cohortManager.createCohort(namesCohort)

    // execute
    const student = cohortManager.addStudentToCohort(
      namesCohort,
      'Gideon',
      'Usenbor',
      'git-ctrl',
      'gideonusenbor'
    )

    // verify

    expect(student.firstName).toEqual('Gideon')
    expect(student.lastName).toEqual('Usenbor')
    expect(student.githubAccount).toEqual('gid-ctrl')
    expect(student.email).toEqual('gideonusenbor')
    expect(cohort.students.length).toBe(1)
    expect(cohort.students).toEqual([student])
  })

  it('should remove a cohort', () => {
    // set up
    const expected = cohortManager.createCohort('Cohort 1')
    // execute
    const result = cohortManager.removeCohortByName('Cohort 1')
    // verify
    expect(result).toEqual(expected)
    expect(cohortManager.cohorts.length).toEqual(0)
  })

  it('should get cohort by name', () => {
    // set up
    const expected = cohortManager.createCohort('Cohort 4')
    // execute
    const result = cohortManager.getCohortByName('Cohort 4')
    // verify
    expect(result).toEqual(expected)
  })

  it('should show error if cohort not found', () => {
    expect(() => cohortManager.getCohortByName('Cohort 11')).toThrowError(
      'Cohort not found'
    )
  })

  it('remove a student from a cohort', () => {
    // set up
    const namesCohort = 'Cohort 5'

    const cohort = cohortManager.createCohort(namesCohort)

    const student1 = cohortManager.addStudentToCohort(
      namesCohort,
      'Bob',
      'Bobby',
      'gitgit',
      'email@email'
    )
    const student2 = cohortManager.addStudentToCohort(
      namesCohort,
      'G',
      'U',
      'gitmail',
      'emailemail@email'
    )

    // execute
    const result = cohortManager.removeStudentFromCohort(
      namesCohort,
      student1.studentId
    )

    // verify
    expect(result).toEqual(true)
    expect(cohort.students.length).toBe(1)
    expect(cohort.students[0].studentId).toBe(student2.studentId)
  })
})
