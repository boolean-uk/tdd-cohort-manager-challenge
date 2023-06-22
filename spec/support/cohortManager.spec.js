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

  it('adds a student to an existent cohort', () => {
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
    expect(student).not.toBeNull()
    expect(student.studentId).toEqual(0)
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

  fit('should get cohort by name', () => {
    // set up
    const expected = cohortManager.createCohort('Cohort 4')
    // execute
    const result = cohortManager.getCohortByName('Cohort 4')
    // verify
    expect(result).toEqual(expected)
  })

  it('will throw an error if cohort not found', () => {
    expect(() => cohortManager.getCohortByName('Cohort 4')).toThrowError(
      'Cohort not found'
    )
  })
})

// it('should show error is cohort not found', () => {
//   // set up
//   const expected = 'The Cohort searched cannot be found'

//   cohortManager.createCohort('Cohort 7')
//   cohortManager.createCohort('Cohort 8')
//   cohortManager.createCohort('Cohort 9')
//   cohortManager.createCohort('Cohort 10')
//   const result = cohortManager.searchCohort('Cohort 10')

//   // verify
//   expect(result).toEqual(expected)
// })
