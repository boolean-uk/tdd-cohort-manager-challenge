const { Manager } = require('../src/index')

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

  it('find cohort by name', () => {
    NewCohort.createNewCohort('software dev')
    expect(NewCohort.searchForCohortByName('software dev')).toEqual([
      { cohortID: 1, name: 'software dev', students: [] }
    ])
  })

  it('find cohort by id', () => {
    NewCohort.createNewCohort('software dev')
    expect(NewCohort.searchForCohortByID(1)).toEqual({
      cohortID: 1,
      name: 'software dev',
      students: []
    })
  })

  it('add student to cohort', () => {
    NewCohort.createNewCohort('software dev')
    NewCohort.createNewStudent(
      'Joe',
      'Bobby',
      'JoeBobbyGithub',
      'joebobs@gmail.com'
    )
    expect(NewCohort.addStudentToCohort(1, 1)).toEqual({
      cohortID: 1,
      name: 'software dev',
      students: [
        {
          firstName: 'Joe',
          lastName: 'Bobby',
          email: 'joebobs@gmail.com',
          githubName: 'JoeBobbyGithub',
          studentID: 1,
          cohortID: 1
        }
      ]
    })
  })

  it('add cohort to student', () => {
    NewCohort.createNewCohort('software dev')
    NewCohort.createNewStudent(
      'Joe',
      'Bobby',
      'JoeBobbyGithub',
      'joebobs@gmail.com'
    )
    NewCohort.addStudentToCohort(1, 1)
    expect(NewCohort.students).toEqual([
      {
        firstName: 'Joe',
        lastName: 'Bobby',
        email: 'joebobs@gmail.com',
        githubName: 'JoeBobbyGithub',
        studentID: 1,
        cohortID: 1
      }
    ])
  })

  it('remove cohort by name', () => {
    NewCohort.createNewCohort('software dev')
    NewCohort.createNewStudent(
      'Joe',
      'Bobby',
      'JoeBobbyGithub',
      'joebobs@gmail.com'
    )
    NewCohort.removeCohortByName('software dev')
    expect(NewCohort.cohorts.length).toEqual(0)
  })

  it('return error if cohort unavailable', () => {
    NewCohort.createNewCohort('software dev')
    NewCohort.createNewStudent(
      'Joe',
      'Bobby',
      'JoeBobbyGithub',
      'joebobs@gmail.com'
    )

    expect(NewCohort.removeCohortByName('softwa dev')).toBeFalse()
  })

  it('remove student from array in cohort', () => {
    NewCohort.createNewCohort('software dev')
    NewCohort.createNewStudent(
      'Joe',
      'Bobby',
      'JoeBobbyGithub',
      'joebobs@gmail.com'
    )
    NewCohort.addStudentToCohort(1, 1)
    NewCohort.removeStudentFromCohort(1)

    expect(NewCohort.searchForCohortByID(1)).toEqual({
      cohortID: 1,
      name: 'software dev',
      students: []
    })
  })

  it('remove cohortID from student', () => {
    NewCohort.createNewCohort('software dev')
    NewCohort.createNewStudent(
      'Joe',
      'Bobby',
      'JoeBobbyGithub',
      'joebobs@gmail.com'
    )
    NewCohort.addStudentToCohort(1, 1)
    NewCohort.removeStudentFromCohort(1)

    expect(NewCohort.searchForStudentByID(1)).toEqual({
      firstName: 'Joe',
      lastName: 'Bobby',
      email: 'joebobs@gmail.com',
      githubName: 'JoeBobbyGithub',
      studentID: 1,
      cohortID: null
    })
  })
})
