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
    // set up
    const manager = new CohortManager()

    const cohort = manager.addCohort('Cohort A')

    const addedStudent = {
      firstName: 'Gideon',
      lastName: 'Usenbor',
      githubAccount: 'gideonusenbor',
      email: 'gideon@example.com'
    }

    // execute
    const result = manager.addStudentToCohort('Cohort A', addedStudent)

    // verify
    expect(result).toBe(true)
    expect(cohort.students.length).toBe(1)
    expect(cohort.students[0].firstName).toBe('Gideon')
    expect(cohort.students[0].lastName).toBe('Usenbor')
    expect(cohort.students[0].githubAccount).toBe('gideonusenbor')
    expect(cohort.students[0].email).toBe('gideon@example.com')
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
