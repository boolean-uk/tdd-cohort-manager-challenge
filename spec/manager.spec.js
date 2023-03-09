const { Cohort, Manager, Student } = require('../src/index')

describe('CohortManager', () => {
  let NewCohort
  beforeEach(() => {
    NewCohort = new Manager()
  })

  it('create new cohorts', () => {
    NewCohort.createNewCohort('software dev')
    NewCohort.createNewCohort('cyber security')
    expect(NewCohort.cohorts.length).toEqual(2)
  })

  it('create new students', () => {
    NewCohort.createNewStudent(
      'Joe',
      'Bobby',
      'JoeBobbyGithub',
      'joebobs@gmail.com'
    )
    NewCohort.createNewStudent(
      'Sam',
      'Brown',
      'SamBrownGithub',
      'Sambrown@gmail.com'
    )
    expect(NewCohort.students.length).toEqual(2)
  })
})
