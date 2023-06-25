const CohortManager = require('../../src/cohortManager')
const Student = require('../../src/students')

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

  it('should add a student to an existing cohort', () => {
    const manager = new CohortManager()

    manager.addCohort('Cohort A')

    const addedStudent = manager.addStudentToCohort(
      'Cohort A',
      'Gideon',
      'Usenbor',
      'gideonusenbor',
      'gideon@example.com'
    )

    const cohort = manager.getCohort('Cohort A')

    expect(addedStudent).toBeDefined()
    expect(addedStudent.firstName).toEqual('Gideon')
    expect(addedStudent.lastName).toEqual('Usenbor')
    expect(addedStudent.githubAccount).toEqual('gideonusenbor')
    expect(addedStudent.email).toEqual('gideon@example.com')

    expect(cohort.students).toContain(addedStudent)
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

  it('should show an error if cohort not found', () => {
    expect(() => cohortManager.getCohortByName('Cohort 11')).toThrowError(
      'Cohort Not Found'
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
