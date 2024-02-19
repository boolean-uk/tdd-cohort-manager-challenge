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
})
