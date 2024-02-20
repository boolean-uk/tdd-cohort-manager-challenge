const FIRST_NAMES = [
  'John',
  'Phil',
  'Jacob',
  'Kurt',
  'Saul',
  'Michael',
  'Jackson'
]

const LAST_NAMES = [
  'Duncan',
  'Jacobs',
  'Adams',
  'Hårfagre',
  'Ozbourne',
  'Cobain'
]

describe('Cohort Manager Extended Criteria:', () => {
  let cohortManager

  const student = {
    firstName: 'Saul',
    lastName: 'Hudson',
    gitHubUsername: 'SaulGitHudsonHub',
    email: 'saul@hudson.com'
  }

  beforeEach(() => {
    delete require.cache[require.resolve('../../src/CohortManager.js')]
    cohortManager = require('../../src/CohortManager.js')
  })

  it('Finds a student by given id in any cohort', () => {
    cohortManager.create('CohortWithStudent')
    cohortManager.create('SomeOtherCohort')
    cohortManager.create('AThirdCohort')
    cohortManager.addStudent(
      { firstName: 'Owen', lastName: 'Wilson' },
      'AThirdCohort'
    )
    cohortManager.addStudent(
      { firstName: 'Some', lastName: 'Person' },
      'SomeOtherCohort'
    )
    expect(cohortManager.addStudent(student, 'CohortWithStudent')).toBeTrue()
    const foundStudent = cohortManager.findStudentById(3)
    delete foundStudent.id
    expect(foundStudent).toEqual(student)
  })

  it('Has a fixed capacity at 24 students per cohort', () => {
    const cohortName = 'CapacityCohort'
    cohortManager.create(cohortName)
    for (let i = 0; i < 24; i++) {
      const student = {
        firstName: FIRST_NAMES[Math.random() * (FIRST_NAMES.length + 1)],
        lastName: LAST_NAMES[Math.random() * (LAST_NAMES.length + 1)]
      }
      cohortManager.addStudent(student, cohortName)
    }
    expect(() => cohortManager.addStudent(student, cohortName)).toThrow(
      new Error('Student max capacity reached!')
    )
  })

  it('Can not have two or more cohorts with the same name', () => {
    const cohortName = 'SameNameCohort'
    cohortManager.create(cohortName)
    expect(() => cohortManager.create(cohortName)).toThrowError()
  })
})
