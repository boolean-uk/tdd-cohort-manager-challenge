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
    const namesCohort = 'Cohort X'
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
})
